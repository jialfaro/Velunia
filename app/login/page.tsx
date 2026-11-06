export default function Login() {
  return <main style={{minHeight:"100vh",display:"grid",placeItems:"center",background:"#08090b",color:"#f5f6f8",fontFamily:"Arial"}}>
    <section style={{width:"min(420px,90vw)",padding:36,background:"#111318",border:"1px solid #242832"}}>
      <a href="/" style={{color:"#b7ff5a",fontWeight:900}}>NEXORA.</a>
      <h1>Acceso de clientes</h1>
      <p style={{color:"#9297a3",lineHeight:1.7}}>La autenticación se conectará a Supabase cuando se configuren las variables del proyecto.</p>
      <label style={{display:"block",marginTop:24}}>Correo electrónico</label><input disabled placeholder="tu@correo.com" style={{width:"100%",padding:14,marginTop:8,background:"#08090b",border:"1px solid #414652",color:"white"}}/>
      <label style={{display:"block",marginTop:18}}>Contraseña</label><input disabled type="password" placeholder="••••••••" style={{width:"100%",padding:14,marginTop:8,background:"#08090b",border:"1px solid #414652",color:"white"}}/>
      <p style={{color:"#9297a3",fontSize:12}}>Configura Supabase Auth para habilitar el inicio de sesión.</p>
    </section>
  </main>;
}
