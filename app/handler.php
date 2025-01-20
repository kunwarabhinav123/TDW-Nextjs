<?php
// echo "===hi====\n\n";
// exit;
error_reporting(1);
// error_reporting(0);
$cur_time = date('d-m-Y h:i:s');
$Pdstrt_time= round(microtime(true) * 1000);
// if(isset($_SERVER['SERVER_NAME']) && (preg_match('/tradeseal\.com|womensilkgarments\.com/',$_SERVER['SERVER_NAME'])   || preg_match('/prod\-Maximizer/',__DIR__))){
//     // print_r($_SERVER) ;
// 	ini_set('include_path', __DIR__.'/../IMPaidClnt/');
//     include "Core/CustomTemplateEngine.php";
//     define("VIEWS_FULL_PATH", __DIR__.'/../IMPaidClnt/TmplViews/');
//     define('TMPL_PATH',"TmplViews/");
// // 	print_r($_SERVER);
// 	 }else{
    ini_set('include_path', __DIR__.'/../IMPaidClnt/');
    include "Core/CustomTemplateEngine.php";
    define("VIEWS_FULL_PATH", __DIR__.'/../IMPaidClnt/TmplViews/');
    define('TMPL_PATH',"TmplViews/");
// }
$http='http://';
if(strtolower($_SERVER['HTTP_X_FORWARDED_PROTO']) == 'https'){
        $http='https://';
}

if(isset($_SERVER['PATH_INFO'])){
    $_SERVER['SCRIPT_URL'] = $_SERVER['PATH_INFO'];
    $_SERVER['SCRIPT_URI']= $http.$_SERVER['SERVER_NAME'].$_SERVER['PATH_INFO'];
}

$httphost=isset($_SERVER['HTTP_HOST'])?explode(':',$_SERVER['HTTP_HOST']):array();
$_SERVER['HTTP_HOST']=$httphost[0];

//403 for wp-login.php request implemented on 20th Jan 2017 @13:00
//403 for any .php request implemented on 23th Jan 2017 @10:05 AM
if(isset($_SERVER['SCRIPT_URL']) && (((preg_match('/\.php/',$_SERVER['SCRIPT_URL']) || preg_match('/\/wp-/',$_SERVER['SCRIPT_URL']) || preg_match('/\/wordpress\//',$_SERVER['SCRIPT_URL'])|| preg_match('/\/href=/i',$_SERVER['SCRIPT_URL']) )) || (preg_match('/\/reg\.html|\/member\/|\/dglobby|\/hhcp|\/pc\.html|\/p2p\.html|\/zhuces\.php|\/main\.html|\/PageRegister\?uid\=|\/\?c\=Lottery|\/pc\/|\/game\/|\/home\/|\/regpage\.do|\/Lobby\/|\/lottery\/|\/page\/|\/v\/|\/api\/|\/lotteryV3\/|\/main\/|\/lottery\/|\/page\/|\/v\/|\/api\/|\/lotteryV3\/|\/main\/|\/EleGame\/|\/views\/|\/\/\?s\=index|\/\/\?a\=fetch/',$_SERVER['SCRIPT_URL'])))){
	header('HTTP/1.1 403 Forbidden');
	header("Content-Type: text/html");
	echo "<html><head>
		<title>403 Forbidden</title>
		</head><body>
		<h1>Forbidden</h1>
		<p>You don't have permission to access <b>{$_SERVER['SCRIPT_URL']}</b>
		on this server.</p>
		<p>server1</p>
		</body></html>";
	exit;
}
if(isset($_SERVER['HTTP_REFERER']) && (preg_match('/go\.mail\.ru/',$_SERVER['HTTP_REFERER']) || preg_match('/anti-crisis-seo/',$_SERVER['HTTP_REFERER']))){
	header('HTTP/1.1 403 Forbidden');
  	header("Content-Type: text/html");
	echo "<html><head>
		<title>403 Forbidden</title>
		</head><body>
		<h1>Forbidden</h1>
		<p>Please type correct URL.</p>
		<p>server2</p>
		</body></html>";
	exit;
}

if(isset($_SERVER['HTTP_REFERER']) && preg_match('/:80/',$_SERVER['HTTP_REFERER'])){
	header('HTTP/1.1 403 Forbidden');
  	header("Content-Type: text/html");
	echo "<html><head>
		<title>403 Forbidden</title>
		</head><body>
		<h1>Forbidden</h1>
		<p>Please type correct URL.</p>
		<p>server2</p>
		</body></html>";
	exit;
}

$ENVMNT = "LIVE";

$IS_SAMPLE = false;

$DOC_PATH = $_SERVER['DOCUMENT_ROOT']."/..";

$get_folders = preg_replace('#^/#','',$_SERVER['SCRIPT_URL']);
$get_folders = explode('/',$get_folders);

// Below code to log handler file request
// if(isset($_SERVER['SCRIPT_URI']) && isset($_SERVER['PATH_TRANSLATED'])){
// 	if($statusfile = fopen("/home3/indiamart/public_html/cgi/TDWSaveXML/handerl-log.txt", "a")){
// 		fwrite($statusfile, $_SERVER['SCRIPT_URI'].'=='.$_SERVER['PATH_TRANSLATED']."\n");
// 		fclose($statusfile);
// 	}
// }

if(preg_match('#intermesh\.net$#',$_SERVER['SERVER_NAME'])){
	$ENVMNT = "DEV";
}elseif(preg_match('#mypcat\.com$#',$_SERVER['SERVER_NAME'])){
	$ENVMNT = "STG";
	if(preg_match('#bhpsample#',$_SERVER['SERVER_NAME'])) $IS_SAMPLE = true;

	/* Home redirection on BHPTEMP / BHPSAMPLE */
	if(count($get_folders)==1 && preg_match('#\.html$#',$get_folders[0])){
		if(isset($_SERVER['HTTP_REFERER'])){
			$REFERER  = preg_replace('#^http://#',"",$_SERVER['HTTP_REFERER']);
			$REFERER  = explode('/',$REFERER);
			if(count($REFERER)>=2 && !empty($REFERER[1])){
				$URL = preg_replace('#mypcat\.com#','mypcat.com/'.$REFERER[1],$_SERVER['SCRIPT_URI']);
				header("Location: $URL");
				exit;
			}
		}
	}
}




if($ENVMNT != "LIVE"){
	$DOC_PATH = $_SERVER['DOCUMENT_ROOT'];
	if($ENVMNT=="DEV"){
		$page_requested = count($get_folders) >= 3 ? $get_folders[2] : "";
	}else{
		$page_requested = count($get_folders) >= 2 ? $get_folders[1] : "";
	}
}else{
	$page_requested = count($get_folders) >= 1 ? $get_folders[0] : "";
}


if($page_requested == ''){  $page_requested = "index.html";}

if(isset($page_requested) && ($page_requested!='') && ((preg_match("/\\s/", $page_requested)) || (preg_match("/=/", $page_requested))))
{
    header('HTTP/1.1 403 Forbidden');
    header("Content-Type: text/html");
    echo "<html><head>
        <title>403 Forbidden</title>
        </head><body>
        <h1>Forbidden</h1>
        <p>Please type correct URL.</p>
        <p>server2</p>
        </body></html>";
    exit;
}

//Redirection to franchisee.html page if request of different type of franchisee page from dynamic mobile/desktop
$franchisee_flnames = array('franchisee-enquiry-form.html', 'distributor-enquiry-form.html', 'wholesaler-enquiry-form.html', 'agent-enquiry-form.html', 'retailer-enquiry-form.html', 'vendor-enquiry-form.html', 'pharma-franchisee-enquiry-form.html');
if(preg_match('/enquiry-form\.html$/', $page_requested) && in_array($page_requested, $franchisee_flnames) ){
	$redirect_url = $http.$_SERVER['SERVER_NAME'].'/franchisee.html';
	header("HTTP/1.0 301 Moved Permanently");
	header("Location: ".$redirect_url);
	exit;
}
else if($page_requested == 'query.html'){
	//Redirection to enquiry.html if request of query.html page
	$redirect_url = $http.$_SERVER['SERVER_NAME'].'/enquiry.html';
	header("HTTP/1.0 301 Moved Permanently");
	header("Location: ".$redirect_url);
	exit;
}

$robots_link=$_SERVER['SERVER_NAME'];
//Get data for mobile site as well
$mob_dynamic = false;


    if(preg_match('#^m\.#',$_SERVER['SERVER_NAME'])){
        $d_url=preg_replace('/http:\/\/m\./',$http.'www.',$_SERVER['SCRIPT_URI']);
        header("HTTP/1.1 301 Moved Permanently");
		header("Location: ".$d_url);
		exit;
    }

    ##MS if($_REQUEST['mobile']=='YES' ){ $_SERVER['WURFL_CAN_ASSIGN_PHONE_NUMBER']='true';}

    ##MS if(($_SERVER['WURFL_CAN_ASSIGN_PHONE_NUMBER']=='true' || $_SERVER['WURFL_IS_TABLET']=='true' || preg_match('/mobile_site_cookie=2/',$_SERVER['HTTP_COOKIE'])) && !preg_match('/mobile_site_cookie=1/',$_SERVER['HTTP_COOKIE'])){
    if(($_SERVER['IS_MOBILE']=='YES' || $_SERVER['IS_TABLET']=='YES' || preg_match('/mobile_site_cookie=2/',$_SERVER['HTTP_COOKIE'])) && !preg_match('/mobile_site_cookie=1/',$_SERVER['HTTP_COOKIE'])){
    $mob_dynamic = true;
	$_SERVER['SERVER_NAME'] = preg_replace('/^www\./','',$_SERVER['SERVER_NAME']);
    }

if(preg_match('#^m\.#',$_SERVER['SERVER_NAME'])){
	$mob_dynamic = true;
	$_SERVER['SERVER_NAME'] = preg_replace('/^m\./','',$_SERVER['SERVER_NAME']);
}
// google varification files
if(preg_match('#googlea39ce0134aeec0ad|google9f8e0db324bc4df6|google89ca876575fd986b|google57773ce3b13b6fc4|google45a83ccbab8c7bb0|google18239cda9255d207|google1346b3d57c4f37af|google08ab2478871faa74|googleb619603248852498|google4a6c374e78791cf7|googlea6fd6d28e90ca1c2|google530fe6991603cc0e|google07830d5567b50e2b|google6f9e08cadb14abad|googlec75be2ff03a967a0|googlee7168b64de0192d4|google43a4891f13ceeb1c|google4519147dbc6961ec|google8a1a37d4ac57705f|googlecf88e6cccae584cd|googlefe2d1f6a365fe6ae|googlebf53fd9234c56b7f|googlec1e9ef1750e5781d|google9ed9cdd730276e6c|googlee657fe3a3e0b47e8|googlec0dc063f9f8f1164|google71f9cea0092891ec|google93dc1528b711c9cf|googlec0dc063f9f8f1164|google152be1d32593e49c|google587346d7926122c7|googlee467bc93cd5b0824|google55b0579a21fb6fff|googlee248e33022e25f1a|google2b1f323838179d79|google4d2411b035ef8fd4|googleb84c583b75aae0fd|googlefa687834fb9da196|google35f165a47eadcee7|googled72620bf62ad8e9e|google34a21211283d89d3|googlea49ebf09847c8354|googlead2cccd9af054d0e|google91124eab3a65d04d|google7233f84e959df692|google67df888ea463fddf|google03b690d0e581541b|googleff77ca2c02256e42|googlee64e16108f8b1992|google1fd9e5dd10e941cf|googleb00fe6dab73f506a|google09d9bb1a1c6d4396|google11087d56fd2da2ff|googleff8e49eb593f9979|googlef60e6897c8ac54a7|googleff7243a1808d95ee|googlea4878ea6d8a63e1b|googlecc39c0f7bc57c490|google5050466ee297b2b3|google22c1fd2d1fe0c944|googleb14453149cd503d3|googleb7c7aa2a88794e1f|google385507e71a658240|google2f54fa6b1c39f884|googleb2e79103fe9c99e4|google7ff57f64cc2c23dc|google293c74fdfa46ccb5|googlec60b81cb6f359b9a|google593ae1e8489f588e|googleaa79f583de89f883|google22165a4fba957fb0|googlee0c3189033df91f2|google8104bd49f3356dfb|googlec0c9ca7d2c6db81c|googlec1668e48b23689ab|google4e575501d24cd3ff|google9cad4ac5615ee2a7|googlee4f613bb150dd3c5|google5f4593a71a47eb01|google9f5890993d94b003|google93f360c766f9dbd0|google3392cb32116686b0|google6fec2aebccc84c29|googlef8f668ab6f47dfa3|googleb1c2e9565a6f0fd6|googleffb0bb5bdaff53b5|googlea2e40c94c06c053f|googlecad7933fe29a9c59|google14d4ba8f47f95410|google9be2473fd7233bee|googleb0d1c8bc9bbf72ab|googlea2a2208745b0f651|google565bff80cebff823|google22c6f57fb76a0184|googleafec3d57a12048dd|google06cfef67d426928b|googlec2db1da530d99efe#',$page_requested)){
    echo "google-site-verification: $page_requested";
    exit;
}
if(preg_match('/robots.txt/',$page_requested)){
header('Content-Type:text/plain');
echo "#Robots.txt
User-agent: *
Disallow: /cgi/    # keep robots out of the executable tree
Disallow: /temp/   # temp directory
Disallow: /stats/  # stats directory
Disallow: /glpcat/   # glpcat directory
Disallow: /GATRACK/   # GATRACK directory
Sitemap: $http$robots_link/sitemap.xml";
exit;
}
if(preg_match('/BingSiteAuth.xml/',$page_requested)){
header("Content-type: text/xml");
echo "<?xml version=\"1.0\"?>
<users>
	<user>6BA03125DEBF042AABCDD3D10BD4C12E</user>
	<user>4A943F4426F386176AF4D2A7E33F7C5B</user>
	<user>2C3E4DBB437EC1122E16AA9410B71480</user>
	<user>B2DBEE6B191E4BEE7CD2A6E60AA7804A</user>
	<user>939186B959FD1F68DA279746C06845AF</user>
	<user>45F61A87FA1B2D963044864F659E8AEA</user>
	<user>25D059C13A35C8867DBE4A03A7498F20</user>
	<user>0E4DDCEADA01EB61F581DC9E0584229D</user>
	<user>FB52CA12D534543435CC5536112B045E</user>
	<user>B822C9FADB008874A89685359243BC67</user>
	<user>AC53CE9B2FDBAA700DCDD1CAC09A4FEA</user>
	<user>05B8AF3B8542824DBD309F975C630759</user>
	<user>A1EB6E85A7888F41BFF55CC77ABCD1B0</user>
	<user>5957FD5368ED604D06D51F68ECF24472</user>
	<user>82DD3997EDA704881FEBE0C0B9131284</user>
</users>";
exit;
}


//Send the request to notfound page if it's not of html page. Also allow sitemap.xml page
if( (preg_match('/\s+/', $page_requested) && preg_match('/\.html/', $page_requested))){
// 	header("HTTP/1.0 404 Not Found");
// 	$notfound_path = '/home3/indiamart/public_html/'.$_SERVER['SERVER_NAME'].'/notfound.html';
// 	if(file_exists($notfound_path)){
// 		include $notfound_path;
// 		exit;
// 	}
// 	else{
// 		$page_requested = 'notfound.html';
// 	}

 $URL = preg_replace('/\s+/', '', $_SERVER['SCRIPT_URI']);
	header("HTTP/1.1 301 Moved Permanently");
	header("Location: ".$URL);
	exit;


}


if(preg_match('#\.pdf$#',$page_requested) && preg_match('#(\s+|%20)#',$page_requested)){
        header('HTTP/1.1 403 Forbidden');
        header("Content-Type: text/html");
        echo "<html><head>
		<title>403 Forbidden</title>
		</head><body>
		<h1>Forbidden</h1>
		<p>Please type correct URL.</p>
		<p>server5</p>
		</body></html>";
	exit;
}
if(!preg_match('#(\.html|\.htm|sitemap.xml|BingSiteAuth.xml|\.pdf)$#',$page_requested) || (preg_match('#(\.html|\.htm|sitemap.xml|BingSiteAuth.xml|\.pdf)$#',$page_requested) && !preg_match('#^[\w-]+(\.html|\.htm|\.xml|\.pdf)$#',$page_requested))){
	header('HTTP/1.1 403 Forbidden');
	header("Content-Type: text/html");
	echo "<html><head>
		<title>403 Forbidden</title>
		</head><body>
		<h1>Forbidden</h1>
		<p>Please type correct URL.</p>
		<p>server3</p>
		</body></html>";
	exit;
}

//Below code to call sitemap.html page for requested sitemap.xml page
$xml_page_requested = '';
if(preg_match('#sitemap.xml$#',$page_requested)){
	$xml_page_requested = $page_requested;
// 	$page_requested= preg_replace('/\.xml$/',"" ,$page_requested);
    $page_requested= preg_replace('/\.xml$/',".html" ,$page_requested);

}

if($page_requested == 'notfound.html') header("HTTP/1.0 404 Not Found");

/*
if($mob_dynamic){
	$micro_date = microtime();
	$date_array = explode(" ",$micro_date);
	$date = date("Y-m-d H:i:s",$date_array[1]);
	$_SERVER['DateTimebeforeMAPICall'] ="$date" . $date_array[0];
}*/
if($page_requested == 'sitenavigation.html'){
	$URL = preg_replace('/sitenavigation.html/','sitemap.html',$_SERVER['SCRIPT_URI']);
	header("HTTP/1.1 301 Moved Permanently");
	header("Location: ".$URL);
	exit;
}

if($page_requested == 'sitemap.html'){  $page_requested = "sitenavigation.html";}
$companybasicDetail = new CompanyBasicDetails($page_requested);

/*
if($mob_dynamic){
	$micro_date = microtime();
	$date_array = explode(" ",$micro_date);
	$date = date("Y-m-d H:i:s",$date_array[1]);
	$_SERVER['DateTimeAfterMAPICall'] ="$date" . $date_array[0];
}*/

$URL_DETAIL = isset($companybasicDetail->companyhash->URL_DETAIL) ? $companybasicDetail->companyhash->URL_DETAIL : (object)array();
$HEADER = isset($companybasicDetail->companyhash->DATA->HEADER) ? $companybasicDetail->companyhash->DATA->HEADER : (object)array();
$PAGE_HEADER_STATUS = isset($companybasicDetail->companyhash->DATA->PAGE_HEADER_STATUS) ? $companybasicDetail->companyhash->DATA->PAGE_HEADER_STATUS : '';

$rating_DisplayFlag = isset($companybasicDetail->companyhash->DATA->RATING_DISPLAY_FLAG) ? $companybasicDetail->companyhash->DATA->RATING_DISPLAY_FLAG : '';

// disable rating for given client manually
if((isset($URL_DETAIL->PRIVACY_SETTINGS->allowreviewrating_display) && $URL_DETAIL->PRIVACY_SETTINGS->allowreviewrating_display=='disabled') && (isset($rating_DisplayFlag) && $rating_DisplayFlag==1))
{
$companybasicDetail->companyhash->DATA->RATING_DISPLAY_FLAG = '';
}

$ser_name = 'http://'.$_SERVER['SERVER_NAME'];
$ser_name = preg_replace('/http:\/\/|www\./','',$ser_name);

if((preg_match('/tradeseal|womensilkgarments/',$_SERVER['SCRIPT_URI']))) {
// print_r ($_SERVER);
}

if($URL_DETAIL->URL_TYPE != 'PAID' || !preg_match('#'.$ser_name.'#',$URL_DETAIL->PAID_SHOWROOM_URL)){
	header('HTTP/1.1 403 Forbidden');
	header("Content-Type: text/html");
	echo "<html><head>
		<title>403 Forbidden</title>
		</head><body>
		<h1>Forbidden</h1>
		<p>You don't have permission to access / on this server.</p>
		<p>server4</p>
		</body></html>";
	exit;
}

if(isset($URL_DETAIL) && $URL_DETAIL->URL_STATUS== '301'){
// echo "===in side 301 condition===\n";
// print_r ($URL_DETAIL);
    if(isset($URL_DETAIL->URL) && $URL_DETAIL->URL !=""){
//     $rdrct_url=preg_replace('#^/#','',$URL_DETAIL->URL);
    $rdrct_url=preg_replace('#(.*)/#','',$URL_DETAIL->URL);
    }else{
    $rdrct_url="";
    }
// echo "===rdrct_url===$rdrct_url===\n";
    $pattern = '#(.*)/.*(\.html|\.htm)#';
    $replacement = '$1/';
    $redirect=preg_replace($pattern, $replacement, $_SERVER['SCRIPT_URI']);
// echo "===redirect===$redirect===\n";
    $redirect=$redirect.$rdrct_url;
// exit;
    header("Content-type: text/html");
    header("HTTP/1.1 301 Moved Permanently");
    header("Location: $redirect");
    exit;
}

if(preg_match('/sitenavigation.html/',$URL_DETAIL->URL)){
$URL_DETAIL->URL=preg_replace('/sitenavigation/','sitemap',$URL_DETAIL->URL);
}
##Generate Download Brochure if requested PDF and Generated PDF(companyname.pdf) are same else show 404 page
if(preg_match('/\.pdf$/', $page_requested)){
	$paid_showroom_url = (isset($URL_DETAIL->PAID_SHOWROOM_URL)) ? $URL_DETAIL->PAID_SHOWROOM_URL : '';

	$company   = isset($companybasicDetail->companyhash->DATA->COMPANYDETAIL->DIR_SEARCH_COMPANY) ? $companybasicDetail->companyhash->DATA->COMPANYDETAIL->DIR_SEARCH_COMPANY : '';
	$comp_name_bookmark = $companybasicDetail->getBookmark($company);
	$comp_name_bookmark_pdf = $comp_name_bookmark.'.pdf';
	if($page_requested === $comp_name_bookmark_pdf){
		$output_path = '/home/indiamart/public_html/cgi/CLNT_PDF/'.$comp_name_bookmark_pdf;
		$out= "";
		$paid_showroom_url=preg_replace('/\/$/','',$paid_showroom_url);
		$in=$paid_showroom_url."/pdf1.html";
		//procedure to convert html to pdf using wkhtmltopdf tool & always install fonts on server.
		exec("wkhtmltopdf --page-size A4 {$in} {$output_path}  2>&1",$out);

		//Now send pdf to browser for download.
		header('Content-Description: File Transfer');
		header('Content-Type: application/pdf');
		header('Content-Disposition: attachment; filename='.basename($output_path));
		header('Expires: 0');
		header('Cache-Control: must-revalidate');
		header('Pragma: public');
		header('Content-Length: ' . filesize($output_path));
		$files = file_get_contents($output_path);
		print $files;
		exit;
	}
	else{
		header("HTTP/1.0 404 Not Found");
		$notfound_path = '/home3/indiamart/public_html/'.$_SERVER['SERVER_NAME'].'/notfound.html';
		if(file_exists($notfound_path)){
			include $notfound_path;
			exit;
		}
		else{
			$page_requested = 'notfound.html';
		}
	}
}


if($mob_dynamic){
        $URL_DETAIL->PC_CLNT_TMPL_ID = $URL_DETAIL->PC_CLNT_TMPL_PATH;
	$URL_DETAIL->PC_CLNT_TMPL_PATH = 'd0063';
	$URL_DETAIL->MODID='TDW';
}

if($mob_dynamic && isset($URL_DETAIL->PC_CLNT_MBL_TMPL_PATH) && ($URL_DETAIL->PC_CLNT_MBL_TMPL_PATH !='' && $URL_DETAIL->PC_CLNT_MBL_TMPL_PATH !='null')){
$URL_DETAIL->PC_CLNT_TMPL_PATH = $URL_DETAIL->PC_CLNT_MBL_TMPL_PATH;

}


// if($mob_dynamic && ( preg_match('#womensilkgarments#',$_SERVER['SCRIPT_URI']) )){
//      $URL_DETAIL->PC_CLNT_TMPL_PATH = 'd0064';
// }

if((preg_match('/tradeseal|womensilkgarments/',$_SERVER['SCRIPT_URI']))) {
        $URL_DETAIL->PC_CLNT_TMPL_ID = $URL_DETAIL->PC_CLNT_TMPL_PATH;
//   $URL_DETAIL->PC_CLNT_TMPL_PATH = 'd0056';
//   $URL_DETAIL->PC_CLNT_STYLE_ID='2377';
	if(isset($_REQUEST['mtmpl'])){
	$URL_DETAIL->PC_CLNT_TMPL_PATH = $_REQUEST['mtmpl'];
	$URL_DETAIL->PC_CLNT_STYLE_ID = $_REQUEST['style'];
	}
	// 	$URL_DETAIL->MODID='TDW';
}

// if($mob_dynamic && ( preg_match('/tradeseal|womensilkgarment/',$_SERVER['SCRIPT_URI'])  )){
//      $URL_DETAIL->PC_CLNT_TMPL_PATH = 'd0063';
// }

// if(($mob_dynamic) && (preg_match('/womensilk/',$_SERVER['SCRIPT_URI']))){
// 	$URL_DETAIL->PC_CLNT_TMPL_PATH='d0063';
// // 	$URL_DETAIL->PC_CLNT_STYLE_ID='2457';
// }
//
// if(!($mob_dynamic) && (preg_match('/womensilkgarment/',$_SERVER['SCRIPT_URI']))){
// 	$URL_DETAIL->PC_CLNT_TMPL_PATH='d0073';
// 	$URL_DETAIL->PC_CLNT_STYLE_ID='2458';
// }

if($URL_DETAIL->GLUSR_USR_ID=='2989228'){
    $URL_DETAIL->CIN_LINK=0;
	if($page_requested=='registration-directors-info.html'){
	$companybasicDetail->pagelinktype = 'notfound';
	include TMPL_PATH."{$URL_DETAIL->PC_CLNT_TMPL_PATH}/notfound.php";

	}

	}
	if(($mob_dynamic) && (preg_match('/womensilk|tradeseal/',$_SERVER['SCRIPT_URI']))){
		$URL_DETAIL->PC_CLNT_TMPL_PATH='d0063';
	// 	$URL_DETAIL->PC_CLNT_STYLE_ID='2457';
	}
else if($URL_DETAIL->GLUSR_USR_ID =='423104' || $URL_DETAIL->GLUSR_USR_ID =='2003749') {
// d0051 - 2369
// d0056 - 2377, 2379, 2380
// d0057 - 2384
	$URL_DETAIL->PC_CLNT_TMPL_PATH='d0005';
    $URL_DETAIL->PC_CLNT_STYLE_ID='1155';

// 	$URL_DETAIL->PC_CLNT_TMPL_PATH='d0051';
//     $URL_DETAIL->PC_CLNT_STYLE_ID='2369';

//     $URL_DETAIL->PC_CLNT_TMPL_PATH='d0055';
//     $URL_DETAIL->PC_CLNT_STYLE_ID='2381';

// 	$URL_DETAIL->PC_CLNT_TMPL_PATH='d0056';
//     $URL_DETAIL->PC_CLNT_STYLE_ID='2377';

// 	$URL_DETAIL->PC_CLNT_TMPL_PATH='d0057';
//     $URL_DETAIL->PC_CLNT_STYLE_ID='2384';

// 	$URL_DETAIL->PC_CLNT_TMPL_PATH='d0067';
//     $URL_DETAIL->PC_CLNT_STYLE_ID='2400';

// 	$URL_DETAIL->PC_CLNT_TMPL_PATH='d0068';
//     $URL_DETAIL->PC_CLNT_STYLE_ID='2403';

// 	$URL_DETAIL->PC_CLNT_TMPL_PATH='d0073';
//     $URL_DETAIL->PC_CLNT_STYLE_ID='2453';
}

// if($URL_DETAIL->GLUSR_USR_ID == 202276 || $URL_DETAIL->GLUSR_USR_ID == 52026) $URL_DETAIL->PC_CLNT_TMPL_PATH='d0031';

if(!(isset($URL_DETAIL->PC_CLNT_TMPL_PATH) && $URL_DETAIL->PC_CLNT_TMPL_PATH=='d0056' || $URL_DETAIL->PC_CLNT_TMPL_PATH == 'd0057' || $URL_DETAIL->PC_CLNT_TMPL_PATH == 'd0054' || $URL_DETAIL->PC_CLNT_TMPL_PATH=='d0055' || $URL_DETAIL->PC_CLNT_TMPL_PATH=='d0058' || $URL_DETAIL->PC_CLNT_TMPL_PATH=='d0051' || $URL_DETAIL->PC_CLNT_TMPL_PATH=='d0031' || $URL_DETAIL->PC_CLNT_TMPL_PATH=='d0005' || $URL_DETAIL->PC_CLNT_TMPL_PATH=='d0062' || $URL_DETAIL->PC_CLNT_TMPL_PATH=='d0063' || $URL_DETAIL->PC_CLNT_TMPL_PATH=='d0064' || $URL_DETAIL->PC_CLNT_TMPL_PATH=='d0067' || $URL_DETAIL->PC_CLNT_TMPL_PATH=='d0068' || $URL_DETAIL->PC_CLNT_TMPL_PATH=='d0073' || $URL_DETAIL->PC_CLNT_TMPL_PATH=='d0070' || $URL_DETAIL->PC_CLNT_TMPL_PATH=='d0069')){
	$alias = $companybasicDetail->clnt_folder;

	if( $ENVMNT=="STG" && file_exists($DOC_PATH."/$alias") && is_dir($DOC_PATH."/$alias")){
		if(count($get_folders)==1){
			header("Location: ".$_SERVER['SCRIPT_URI']."/");
		}
	}

	if(!$IS_SAMPLE && (!isset($URL_DETAIL->SERVICENAME) || $URL_DETAIL->SERVICENAME=='MDC' || empty($URL_DETAIL->SERVICENAME))) {
		header("HTTP/1.0 404 Not Found");
		$notfound_path = '/home3/indiamart/public_html/'.$_SERVER['SERVER_NAME'].'/notfound.html';
		if(file_exists($notfound_path)){
			include $notfound_path;
		}

// 		if(isset($_REQUEST['showdata'])){
// 			echo "<br><br><br><br><br><br><pre>";
// 			print_r($companybasicDetail->companyhash);
// 		}
		exit;
	}
//     $pagename_fetch = !empty($companybasicDetail->pagelinktype) ? $companybasicDetail->pagelinktype : preg_replace('/\.html$/',"" ,$page_requested);
echo "===== ".$URL_DETAIL->PC_CLNT_TMPL_PATH." is not valid template=====";
	$glid = (isset($URL_DETAIL->GLUSR_USR_ID)) ? $URL_DETAIL->GLUSR_USR_ID : '';
    $catindex=!empty($HEADER->CAT_INDEX)?$HEADER->CAT_INDEX:'';
// 	$redirect_url = !empty($glid) ? get_redirection_url($glid,$catindex,$companybasicDetail) : ''; //Get redirection URL if any
    $redirect_url = '';
	if(!empty($redirect_url)){
// echo "=====222===";
		header("HTTP/1.1 301 Moved Permanently");
		header("Location: ".$redirect_url);
	}
	else{
// echo "=====333===";
		header("HTTP/1.0 404 Not Found");
		$notfound_path = '/home3/indiamart/public_html/'.$_SERVER['SERVER_NAME'].'/notfound.html';
		if(file_exists($notfound_path)){
			include $notfound_path;
		}
		else{
			include $DOC_PATH."/$alias/notfound.html";
		}
	}
	exit;
}

// send header 503 status in case of 5xx from MAPI
if(!isset($URL_DETAIL) || $URL_DETAIL->URL_STATUS == '500' || $URL_DETAIL->URL_STATUS == '501' || $URL_DETAIL->URL_STATUS == '502' || $URL_DETAIL->URL_STATUS == '503' || $URL_DETAIL->URL_STATUS == '504') {
        header("HTTP/1.1 503 Service Unavailable");
        header("Content-Type: text/html");
        echo "503 Service Unavailable";

        $date_time= date("Y-m-d H:i:s");
        $subject="503 Service unavaliable for maximizer";
        $message= "Receving 5xx error from mapi at $date_time in handler";
         $to='anjali.sharma@indiamart.com';
         $headers = "From: anjali.sharma@indiamart.com" . "\r\n" .
                    "CC: anjali.sharma@indiamart.com,vinaykaushal@indiamart.com,stuti.chauhan@indiamart.com";

        mail ($to,$subject,$message,$headers);

        exit;
}

if(isset($URL_DETAIL) && $URL_DETAIL->URL_STATUS== '301'){
    if(isset($URL_DETAIL->URL) && $URL_DETAIL->URL !=""){
    $rdrct_url=preg_replace('#^/#','',$URL_DETAIL->URL);
    }else{
    $rdrct_url="";
    }
    $pattern = '#(.*)/.*(\.html|\.htm)#';
    $replacement = '$1/';
    $redirect=preg_replace($pattern, $replacement, $_SERVER['SCRIPT_URI']);
    $redirect=$redirect.$rdrct_url;
    header("Content-type: text/html");
    header("HTTP/1.1 301 Moved Permanently");
    header("Location: $redirect");
    exit;
}

if(!isset($URL_DETAIL) || $URL_DETAIL->URL_STATUS == '404') {
	header("HTTP/1.0 404 Not Found");
	header("Content-Type: text/html");
	echo "404 Not Found";
// 	if(isset($_REQUEST['showdata'])){
// 		echo "<br><br><br><br><br><br><pre>abcd";
// 		print_r($companybasicDetail->companyhash);
// 	}
	exit;
}

//Setting mobile display flag
if(preg_match('/^www\./', $_SERVER['SERVER_NAME']))
{
	$mobile_display_flag = 1;
	$fl_path = '/home/indiamart/public_html/cgi/cname_not_with_im.txt';
// 	if($m_domains = @file($fl_path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES))
// 	{
// 		$domain_name = preg_replace('/^www\./','m.',$_SERVER['SERVER_NAME']);
// 		if(in_array($domain_name, $m_domains) )
// 		{
// 			$mobile_display_flag = 0;
// 		}
// 	}
	$companybasicDetail->companyhash->URL_DETAIL->MOBILE_DISPLAY_FLAG = $mobile_display_flag;
}

$pagename_fetch = !empty($companybasicDetail->pagelinktype) ? $companybasicDetail->pagelinktype : preg_replace('/\.html$/',"" ,$page_requested);

if(in_array($pagename_fetch,array("about-us.htm", "aboutus.htm", "profile.htm", "about.htm", "about_us.htm", "contact.htm", "contacts.htm", "contact-us.htm", "contact_us.htm", "contactus.htm"))){
    $pagename_fetch = preg_replace('/\.html|\.htm$/',"" ,$pagename_fetch);
}

$page_array = array('homepage'=>'index', 'sitenavigation'=>'sitemap','cinpage'=>'registration-directors-info');
if(isset($page_array[$pagename_fetch])){
	$pagename_fetch = $page_array[$pagename_fetch];
}
if(isset($HEADER->SITEMAPLINK)){
    $HEADER->SITEMAPLINK='sitemap.html';
}
if($pagename_fetch == "catindex" && $HEADER->IS_CAT_INDEX_FLAG == 0){
$companybasicDetail->pagelinktype = 'category';
$pagename_fetch = 'category';
}

//Setting default favicon.ico image if not available to avoid 404 error for favicon.ico
if(empty($URL_DETAIL->USER_FAVICON)){
	$URL_DETAIL->USER_FAVICON = $http.'4.imimg.com/data4/VJ/HH/GLADMIN-2003749/favicon.ico';
}


	if(!in_array($pagename_fetch,array('pdf1','search','thankyou', 'franchisee', 'sitemap', 'sitenavigation')) && $PAGE_HEADER_STATUS == 404){
            if($PAGE_HEADER_STATUS == 404 && ($pagename_fetch == "about-us" || $pagename_fetch == "aboutus" || $pagename_fetch == "profile" || $pagename_fetch == "about" || $pagename_fetch == "about_us") && ($HEADER->PROFILE_FINAL != '') && isset($HEADER->ABOUTUS_FCP) && ($HEADER->ABOUTUS_FCP==1) ){
                # Implement redirection of wrong profile pages request to it's corresponding correct about-us page
                    $pattern = '#(.*)/.*(\.html|\.htm)#';
                    $replacement = '$1/';
                    $redirect=preg_replace($pattern, $replacement, $_SERVER['SCRIPT_URI']);
                    $redirect=$redirect.$HEADER->PROFILE_FINAL;
                    header("Content-type: text/html");
                    header("HTTP/1.1 301 Moved Permanently");
                    header("Location: $redirect");
                    exit;
            }else if($PAGE_HEADER_STATUS == 404 && ($pagename_fetch == "new-items") && !empty($HEADER->CAT_INDEX)){

                    $pattern = '#(.*)/.*(\.html|\.htm)#';
                    $replacement = '$1/';
                    $redirect=preg_replace($pattern, $replacement, $_SERVER['SCRIPT_URI']);
                    $redirect=$redirect.$HEADER->CAT_INDEX;
                    header("Content-type: text/html");
                    header("HTTP/1.1 301 Moved Permanently");
                    header("Location: $redirect");
                    exit;
            }else if($PAGE_HEADER_STATUS == 404 && ($pagename_fetch == "contact" || $pagename_fetch == "contacts" || $pagename_fetch == "contact-us"  || $pagename_fetch == "contact_us" || $pagename_fetch == "contactus")){
                    $pattern = '#(.*)/.*(\.html|\.htm)#';
                    $replacement = '$1/';
                    $redirect=preg_replace($pattern, $replacement, $_SERVER['SCRIPT_URI']);
                    $redirect=$redirect.'enquiry.html';
                    header("Content-type: text/html");
                    header("HTTP/1.1 301 Moved Permanently");
                    header("Location: $redirect");
                    exit;
            }else{
                $glid = (isset($URL_DETAIL->GLUSR_USR_ID)) ? $URL_DETAIL->GLUSR_USR_ID : '';
                $catindex=!empty($HEADER->CAT_INDEX)?$HEADER->CAT_INDEX:'';
//                 $redirect_url = !empty($glid) ? get_redirection_url($glid,$catindex,$companybasicDetail) : ''; //Get redirection URL if any
                $redirect_url  = '';
                if(!empty($redirect_url)){
                    header("HTTP/1.1 301 Moved Permanently");
                    header("Location: ".$redirect_url);
                }
                else{
                    header("HTTP/1.0 404 Not Found");
                    $companybasicDetail->pagelinktype = 'notfound';
                    include TMPL_PATH."{$URL_DETAIL->PC_CLNT_TMPL_PATH}/notfound.php";
                }
            }

    }

    if($xml_page_requested=='sitemap.xml' || $xml_page_requested=='image-sitemap.xml'){
        if(file_exists(VIEWS_FULL_PATH."{$URL_DETAIL->PC_CLNT_TMPL_PATH}/{$pagename_fetch}.xml") ){
            ob_clean();
            header("Content-type: text/xml");
            include TMPL_PATH."{$URL_DETAIL->PC_CLNT_TMPL_PATH}/{$pagename_fetch}.xml";
        }
        else{
            header("HTTP/1.0 404 Not Found");
            $companybasicDetail->pagelinktype = 'notfound';
            include TMPL_PATH."{$URL_DETAIL->PC_CLNT_TMPL_PATH}/notfound.php";
        }
    }else if(file_exists(VIEWS_FULL_PATH."{$URL_DETAIL->PC_CLNT_TMPL_PATH}/{$pagename_fetch}.php")){
        include TMPL_PATH."{$URL_DETAIL->PC_CLNT_TMPL_PATH}/{$pagename_fetch}.php";
    }

$Pdend_time= round(microtime(true) * 1000);
$Pd_time = $Pdend_time-$Pdstrt_time;
//  if(isset($_SERVER['SERVER_NAME']) && (preg_match('#depagro\.com|umaplastics\.com|jardinearts\.com|coolant-recovery\.com|oilexpellerindia\.com|1abacus\.in|flowstar\.in|arrowpaperproducts\.co\.in|3dplast\.in|kundkundtextile\.co\.in|tradeseal#',$_SERVER['SERVER_NAME'])   )){


 $message  = "=====Maxi log====\t : Time $cur_time \t {$companybasicDetail->message} \t Paidhandler time : $Pd_time \t \t pdstart time==$Pdstrt_time \t pdend time == $Pdend_time \t url == {$_SERVER['SCRIPT_URI']}";
//  error_log($message,0);

// }
// if(isset($_REQUEST['showdata'])){
// echo "<br><br><br><br><br><br><pre>";
// print_r($_SERVER);
// print_r($companybasicDetail->companyhash);
// }

#/home/indiamart/redirect/connecttdw.pl cron create /home/indiamart/public_html/cgi/tmpredirect/redirect_url.txt and update IIL_RED_GLUSR_DONE from 0 to 1

// function get_redirection_url($glid='',$catindex,$companybasicDetail)
// {
// 	$last_digit = $glid%10;
// 	$file = '/home3/indiamart/public_html/cgi/redirection_tdw/redirectiontdw'.$last_digit.'.txt';
//
// 	if(!file_exists($file)) return '';
//
// 	$handle = @fopen($file, "r");
// 	$redirect='';
// 	if ($handle) {
// 		while (($buffer = fgets($handle, 4096)) !== false) {
//
// 			$url = explode('=>',$buffer);
//
// 			//Replacing new line
// 			$url[1]  = preg_replace('#\n#',"",$url[1]);
// 			//$m_newurl=preg_replace('/www\./','m.',$url[0]);
// // 			echo "==$url[0] ==$url[1] ===";
// //             $url[0]=changeHttpPath("{$url[0]}");
// //             $url[1]=changeHttpPath("{$url[1]}");
// //     if(preg_match("/https:/",$_SERVER['SCRIPT_URI'])){
// //         $SCRIPT_URI=preg_replace("/https:/","http:",$_SERVER['SCRIPT_URI']);
// //     }else{
// //         $SCRIPT_URI=$_SERVER['SCRIPT_URI'];
// //     }
//
//      $SCRIPT_URI=preg_replace('#^http:/\/\www\.|https:/\/\www\.#',"",$_SERVER['SCRIPT_URI']);
//
//
//
//
//
//
// 	if(!empty($url[0]) && ( preg_match("#{$SCRIPT_URI}#",$url[0])  || ((preg_match('#^http:/\/\m\.|https:/\/\m\.#',$SCRIPT_URI)) && $m_newurl == $SCRIPT_URI))){
//
//
//             $old_url=$url[0];
//             $new_url=$url[1];
//             $old_url=$companybasicDetail->changeHttpPath("$old_url");
//             $new_url=$companybasicDetail->changeHttpPath("$new_url");
//
// 				if(!empty($new_url)){
// 					$redirect=$new_url;//New URL to be redirected
//
// 				}elseif($catindex != '' && preg_match('#\.html$#',$catindex)){
//                     $catindex=$companybasicDetail->changeHttpPath($catindex);
//                     $pattern = '#(.*)/.*\.html#';
// 					$replacement = '$1/';
// 					$redirect=preg_replace($pattern, $replacement, $old_url);
//                     $redirect=$redirect.$catindex;
// 				}else{
// 					//If New URL is blank, then send to Home page
// 					$pattern = '#(.*)/.*\.html#';
// 					$replacement = '$1/';
// 					$redirect=preg_replace($pattern, $replacement, $old_url);
//
//
// 				}
// 				break;
// 			}
//
// 		}
// 		fclose($handle);
// 	}
//
// 	return $redirect;
// }
?>
