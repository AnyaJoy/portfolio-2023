import React from 'react'
import '../../styles/footer.css'
import Image from 'next/image';
import { contacts } from '@/app/content/contacts';



function Footer() {
  return (
    <div className="w-full text-center">
      <section className="one"></section>
      <section className="two relative">
        <h5>I&#39;m available for work, get in touch</h5>
        <div className="grid grid-cols-4 m-auto w-9/12 sm:w-6/12 md:w-5/12 lg:w-3/12">
          {contacts.map((c) => (
            <a
              key={c.name}
              className="col-span-1 project-link footer-link"
              href={c.href}
              target="_blank"
            >
              <Image alt={c.name} src={c.img} />
            </a>
          ))}
        </div>
        <p className="text-xs -mb-4">
          Some pictures and icons are taken from{" "}
          <a href="https://www.freepik.com">Freepik</a>,
          <a href="Shutterstock"> Shutterstock</a>,
          <a href="https://www.flaticon.com"> Flaticon</a>.
        </p>
      </section>
    </div>
  );
}

export default Footer