export function Introduction() {
  return (
    <section className="flex flex-col gap-[1.563vw]" id="introduction">
      <section>
        <div className="wrapper bg-[#ac93be] h-[44.583vw]">
          <div className="flex flex-col gap-[1.667vw] pl-[4.167vw]">
            <div className="hero_title">
              <h1 className="text-[6.667vw]/[100%] font-medium -tracking-[0.068vw]">
                Blockgram
              </h1>
              <h2 className="text-[6.667vw]/[100%] -tracking-[0.068vw] font-ter">
                The Telegram you love <br />
                only smarter
              </h2>
            </div>
            <div className="text-[1.563vw]/[125%]">
              Familiar design, but with AI, better UX,
              <br />
              &amp; and built-in features you always wished <br /> Telegram had.
            </div>
          </div>

          <img
            src="/hero-image.svg"
            alt=""
            className="absolute bottom-0 -right-3 size-[35vw]"
          />
        </div>
      </section>

      <section className="">
        <div className="wrapper small bg-[#cfc9e1]">
          <h3 className="text-styles-h1 text-center">Introduction</h3>
        </div>
      </section>

      <section className="text-dark-purple">
        <div className="wrapper">
          <div className="paddings">
            <div className="flex flex-col gap-[1.667vw]">
              <div className="text-styles-h4 secondary">
                Telegram changed how we connect, but it never solved the real
                problems. Scam bots, noisy notifications, forgotten chats, and
                clunky add-ons continue to frustrate millions of users every
                day.
              </div>
              <div className="text-styles-h4 secondary">
                Our study reveals that over{" "}
                <strong counter-element="number" className="number-counter">
                  60
                </strong>
                <strong>
                  % of Telegram users encounter scams or spam monthly
                </strong>
                , forcing communities and individuals to look for safer, smarter
                alternatives.
              </div>
              <div className="text-styles-h4 secondary">
                Blockgram is built to answer this. The same familiar interface
                you know, now supercharged with AI that summarizes chats,
                detects impersonators, organizes notifications, and makes
                in-chat payments seamless.
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
