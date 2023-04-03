export default function CTA() {
  return (
    <section
      id="CTA"
      className="my-36 grid grid-cols-1 px-6 py-12 shadow-2xl md:grid-cols-2 md:gap-16 md:px-16"
    >
      <div>
        <h2 className="mb-12 text-4xl font-bold leading-tight text-black md:text-4xl">
          Rejoignez l&apos;aventure dès aujourd&apos;hui !
        </h2>
        <p className="text-lg text-gray-700">
          Ne manquez pas l&apos;opportunité de rejoindre notre communauté de
          lecteurs passionnés et de profiter de toutes les fonctionnalités
          innovantes que notre application a à offrir. Inscrivez-vous dès
          maintenant pour être parmi les premiers à découvrir et vivre une
          expérience de lecture unique, enrichissante et conviviale.
        </p>
      </div>

      <form>
        <div className="mb-4">
          <label
            htmlFor="first_name"
            className="mb-2 block text-sm text-gray-700"
          >
            Prénom
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1"
            placeholder="Votre prénom"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="last_name"
            className="mb-2 block text-sm text-gray-700"
          >
            Nom
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1"
            placeholder="Votre nom"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="mb-2 block text-sm text-gray-700">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1"
            placeholder="Votre adresse email"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase text-white"
        >
          Inscrivez-vous dès maintenant
        </button>
      </form>
    </section>
  );
}
