export default function Contact({ t }) {
  return (
    <section className="section contact" id="contact">
      <div className="contact-copy">
        <p className="kicker">{t.contactKicker}</p>
        <h2>{t.contactTitle}</h2>
        <p>{t.contactText}</p>
      </div>
      <form action="https://formspree.io/f/xzbolbqq" method="post">
        <label>{t.form.name}<input name="name" required /></label>
        <label>{t.form.email}<input type="email" name="email" required /></label>
        <label>{t.form.message}<textarea name="message" rows="5" required /></label>
        <button className="primary" type="submit">{t.form.send} <span>↗</span></button>
      </form>
    </section>
  );
}
