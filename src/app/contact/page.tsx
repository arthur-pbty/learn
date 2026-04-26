export default function Contact() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6 text-zinc-900">
        Contact
      </h1>

      <p className="text-zinc-600 mb-10 leading-relaxed">
        Une question, une suggestion ou une demande professionnelle ?
        Vous pouvez nous contacter facilement via les options ci-dessous.
        Nous faisons de notre mieux pour répondre rapidement.
      </p>

      <div className="space-y-6">
        {/* Email */}
        <div className="p-6 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-semibold mb-2 text-zinc-900">
            Par email
          </h2>
          <p className="text-zinc-600 mb-3">
            Contactez-nous directement par email :
          </p>
          <a
            href="mailto:contact@arthurp.fr"
            className="text-blue-600 font-medium hover:underline break-all"
          >
            contact@arthurp.fr
          </a>
        </div>

        {/* Formulaire externe */}
        <div className="p-6 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-semibold mb-2 text-zinc-900">
            Formulaire de contact
          </h2>
          <p className="text-zinc-600 mb-3">
            Utilisez notre formulaire pour une demande plus détaillée :
          </p>
          <a
            href="https://contact.arthurp.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 font-medium hover:underline"
          >
            Accéder au formulaire →
          </a>
        </div>
      </div>

      {/* Footer note */}
      <div className="mt-12 text-sm text-zinc-500">
        <p>
          Merci de ne pas envoyer de spam. Les messages non pertinents peuvent être ignorés.
        </p>
      </div>
    </main>
  );
}