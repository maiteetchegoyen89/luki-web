export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="logo">Luki</a>
            <p>Aprende finanzas mientras vives tus finanzas.</p>
            <div className="social-row">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="TikTok">TT</a>
              <a href="#" aria-label="LinkedIn">in</a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Explora</h5>
            <a href="#producto">Producto</a>
            <a href="#nosotros">Nosotros</a>
          </div>
          <div className="footer-col">
            <h5>Soporte</h5>
            <a href="#">Preguntas frecuentes</a>
            <a href="#">Contacto</a>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <a href="#">Política de privacidad</a>
            <a href="#">Términos y condiciones</a>
          </div>
        </div>
        <div className="footer-warning">Luki entrega información educativa y herramientas de organización financiera. No constituye asesoría financiera, tributaria, legal ni de inversión.</div>
        <div className="footer-bottom">
          <p>© 2026 Luki. Todos los derechos reservados.</p>
          <p>Hecho con cariño en Chile 🌱</p>
        </div>
      </div>
    </footer>
  )
}
