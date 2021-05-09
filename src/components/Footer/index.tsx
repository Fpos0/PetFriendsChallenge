import styles from './styles.module.scss';

export function Footer() {
  return (
    <div className={styles.container}>
      <div>
        Desernvolvido por:
        <div>
          <a href="https://github.com/Fpos0">Flávio</a>
        </div>
      </div>
      <div>
        <a href="http://localhost:3000/">Políticas de Privacidade</a>
      </div>
      <div>
        <a href="http://localhost:3000/">Termos de Uso</a>
      </div>
      <div>
        Nossas redes sociais
        <div className={styles.socialNetworks}>
          <img
            src="https://i0.wp.com/www.datacontrolma.com.br/wp-content/uploads/2016/12/logo-facebook.png"
            alt="facebok logo"
          />
          <img
            src="https://estudiojardimguedala.com.br/wp-content/uploads/2019/07/Instagram-circle-icon-1.png"
            alt="Instagram Logo"
          />
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
            alt="Twitter Logo"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a0/YouTube_social_red_circle_%282017%29.svg"
            alt="Youtube Logo"
          />
        </div>
      </div>
    </div>
  );
}
