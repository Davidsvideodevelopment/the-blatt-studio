export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#0B0B0C',
      color: '#E6E3DC',
      fontFamily: 'ui-sans-serif,system-ui,Arial',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <img src="/logo.svg" alt="The Blatt Studio" style={{height:'80px',marginBottom:'1rem'}}/>
      <h1 style={{fontSize:'2rem',letterSpacing:'0.15em',fontWeight:'500'}}>THE BLATT STUDIO</h1>
      <p style={{maxWidth:'560px',textAlign:'center',color:'#B8B4AD',marginTop:'1rem'}}>
        Cinematic storytelling and precision marketing for private equity and corporate leaders.
      </p>
      <a href="mailto:hello@theblattstudio.com"
         style={{
           marginTop:'2rem',
           padding:'12px 28px',
           borderRadius:'9999px',
           background:'linear-gradient(90deg,#BFAE6B,#D9C58A)',
           color:'#111',
           fontWeight:'700',
           textDecoration:'none'
         }}>Work With Us</a>
    </main>
  );
}
