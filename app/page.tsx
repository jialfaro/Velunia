const products = [
  { name: "Cine y series", description: "Suscripciones de entretenimiento audiovisual", category: "STREAMING", icon: "▣", color: "red" },
  { name: "Música", description: "Planes musicales y audio premium", category: "MÚSICA", icon: "♫", color: "green" },
  { name: "Anime", description: "Catálogos especializados de animación", category: "ANIME", icon: "✦", color: "purple" },
  { name: "Contenido digital", description: "Otros servicios digitales autorizados", category: "DIGITAL", icon: "◇", color: "blue" },
];

export default function Home() {
  return <main>
    <nav className="nav"><a className="logo" href="/">NEXORA<span>.</span></a><div className="navlinks"><a href="#catalogo">Explorar</a><a href="#como-funciona">Cómo funciona</a><a className="login" href="/login">Mi cuenta ↗</a></div></nav>
    <section className="hero">
      <div className="eyebrow"><i/> TU UNIVERSO DIGITAL, EN UN SOLO LUGAR</div>
      <h1>Todo lo que te gusta.<br/><span>Una sola experiencia.</span></h1>
      <p>Descubre suscripciones de entretenimiento, música y contenido digital con una experiencia de compra simple y segura.</p>
      <a className="cta" href="#catalogo">EXPLORAR CATÁLOGO <b>↗</b></a>
      <div className="heroGlow"/>
      <div className="heroMeta"><span>01 / DESCUBRE</span><span>STREAMING · MÚSICA · DIGITAL</span></div>
    </section>
    <section id="catalogo" className="catalog">
      <div className="sectionHead"><div><div className="eyebrow">CATÁLOGO NEXORA</div><h2>Encuentra tu próximo favorito.</h2></div><span className="count">04 CATEGORÍAS</span></div>
      <div className="cards">{products.map(p=><article className="card" key={p.name}><div className={`cardIcon ${p.color}`}>{p.icon}</div><small>{p.category}</small><h3>{p.name}</h3><p>{p.description}</p><a href="/catalogo">Ver opciones <b>↗</b></a></article>)}</div>
    </section>
    <section id="como-funciona" className="how"><div className="eyebrow">COMPRA SIMPLE Y SEGURA</div><h2>Tu entretenimiento,<br/>sin complicaciones.</h2><div className="steps"><div><b>01</b><h3>Elige</h3><p>Explora los productos y planes disponibles.</p></div><div><b>02</b><h3>Paga</h3><p>Completa tu compra mediante un proveedor de pagos integrado.</p></div><div><b>03</b><h3>Activa</h3><p>Recibe instrucciones o activación de proveedores autorizados.</p></div></div></section>
    <footer><a className="logo" href="/">NEXORA<span>.</span></a><p>Marketplace independiente de servicios digitales autorizados.</p><small>© {new Date().getFullYear()} NEXORA. Todos los derechos reservados.</small></footer>
  </main>;
}
