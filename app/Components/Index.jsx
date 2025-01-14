import Product from './product';

export default function HomePage({ companydata }) {
  return (
    <>
      <main className="m63_wrp mainCat">
        <article className="m63_scsn_p ml10 mr10 mt10 m63_mndtl">
          <h2>
            <span className="tdn clr5 dib mb20 f26 mt10">
              Block Making Machine
            </span>
          </h2>
        </article>
      </main>
      <Product companydata={companydata} />
    </>
  );
}
