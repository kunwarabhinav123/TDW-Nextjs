import React from 'react';

function ProductList({ companydata }) {
  const productList = companydata?.DATA?.PRDSERV?.[0]?.PRODLIST || [];


  console.log(productList)

  if (productList.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div id="paginate" className="df ffw jcc">
      {productList.map((item, index) => (
        <section
          key={index}
          className="pr m63_prd_dtl df fdc bg4 bsb br5 ofh p155 mb7"
        >
          <h2 className="tdn clr5 dib f22 fw7">{item.ITEM_NAME}</h2>
          <div className="m63_aprx mb10 df aic">
            <a
              id={`retain-re-block-making-machine-${index}`}
              className="ancOff"
            ></a>
            <p className="f20 fw7 flx1 apx_pr clr1">
              Rs {item.PC_ITEM_FOB_PRICE || 'N/A'}
              <span className="f12 clr6 fw4">
                &nbsp;/&nbsp;{item.PC_ITEM_UNIT || 'Set'}
              </span>
            </p>
            <div className="m63_pdf_vid df aic jce">
              <div className="df jcc aic br50 m63_crcl">
                <span className="db m63_sprt m63_vido"></span>
              </div>
              <div className="df jcc aic br50 m63_crcl ml10">
                <span className="db m63_sprt m63_pdfi"></span>
              </div>
            </div>
          </div>
          <div className="m63_dtl_grp df">
            <figure className="bg4 brd3 bsb df aic jcc">
              <span className="tdn df jcc aic">
                <img
                  className="bwh"
                  alt={item.ITEM_NAME}
                  src={item.ITEM_SIMG || 'https://via.placeholder.com/500'}
                />
              </span>
            </figure>
            <div className="clr6 ofh m63_dtl ml5 pr flx1 ft14">
              <ul className="m63_pd">
                <li className="mb6">
                  <span>Automation Grade:</span>
                  <span className="clr5">
                    &nbsp;{item.AUTOMATION_GRADE || 'N/A'}
                  </span>
                </li>
                <li className="mb6">
                  <span>Brick Type:</span>
                  <span className="clr5">
                    &nbsp;{item.BRICK_TYPE || 'N/A'}
                  </span>
                </li>
                <li className="mb6">
                  <span>Method:</span>
                  <span className="clr5">&nbsp;{item.METHOD || 'N/A'}</span>
                </li>
                <li className="mb6">
                  <span>Capacity (bricks per hour):</span>
                  <span className="clr5">
                    &nbsp;{item.CAPACITY || 'N/A'}
                  </span>
                </li>
              </ul>
              <ul className="m63_pd add_info1">
                <li className="mb6">
                  Pay Mode Terms:{' '}
                  <span className="db clr5">{item.PAY_MODE_TERMS || 'N/A'}</span>
                </li>
                <li className="mb6">
                  Production Capacity:{' '}
                  <span className="clr5">
                    {item.PRODUCTION_CAPACITY || 'N/A'}
                  </span>
                </li>
              </ul>
              <div className="m63_rm_sm">
                <div className="df aic mt2">
                  <span>know more</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
