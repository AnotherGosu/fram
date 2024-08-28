export const Contacts = () => {
  return (
    <section data-test="contacts">
      <h3 className="mb-2 text-lg font-medium">Contacts</h3>

      <ul className="flex flex-col gap-2 text-sm text-white/70">
        <li>
          <span data-test="schedule">
            MD - FR from <time dateTime="10:00">10:00</time> to{" "}
            <time dateTime="18:00">18:00</time>
          </span>
        </li>

        <li>
          <a
            href="tel:+0987654321"
            className="w-max hover:text-white focus:outline-blue-300"
            data-test="phone-number"
          >
            +0987654321
          </a>
        </li>

        <li>
          <a
            href="mailto:support@fram.com"
            className="w-max hover:text-white focus:outline-blue-300"
            data-test="email"
          >
            support@fram.com
          </a>
        </li>

        <li>
          <address className="not-italic">
            Karl Johans gate 22, 0159 Oslo, Norway
          </address>
        </li>
      </ul>
    </section>
  );
};
