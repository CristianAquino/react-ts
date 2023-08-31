import { useEffect, useRef, useState } from "react";

export type ObserverProps = {};

const Text = () => {
  return (
    <p style={{ fontSize: "20px" }}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ab enim,
      culpa, iusto maiores impedit quasi, obcaecati quibusdam suscipit expedita
      voluptatum earum illo! Consectetur, eius veritatis iusto labore illum in
      suscipit, dolore assumenda omnis quam temporibus ullam. Corrupti veritatis
      sint perferendis, inventore blanditiis earum vitae ratione! Voluptas
      molestias quod nam eum nihil voluptates ipsum commodi architecto, rerum,
      earum itaque inventore a tempore, pariatur adipisci dolore! Quasi
      architecto adipisci deleniti explicabo porro quae facere eligendi! Aperiam
      voluptates, expedita similique error, aliquid qui pariatur et tempore
      laborum mollitia autem repudiandae. Aliquam voluptas magnam necessitatibus
      quidem, hic aspernatur perspiciatis non recusandae animi dolorem autem
      corporis, quae iste! Doloremque exercitationem non natus accusantium!
      Fugit tenetur quidem provident, vel inventore voluptas maxime. Aspernatur
      doloribus quod, sit magni ipsam debitis? Debitis cum adipisci rerum, odit
      earum illum perspiciatis explicabo quasi corporis pariatur magni dolorum
      perferendis maxime velit nostrum obcaecati odio dignissimos
      exercitationem? Minus pariatur ratione ad autem maxime commodi similique
      laboriosam, nemo unde tenetur aperiam quibusdam non beatae nobis fugit
      dolor corrupti. Doloremque perspiciatis deserunt corporis repellat aperiam
      pariatur placeat ipsam tenetur nobis voluptatem ipsum fugit repellendus
      sequi aliquam a laboriosam, tempora necessitatibus corrupti esse voluptas
      eos voluptatum? Amet voluptatibus aliquam pariatur minus voluptate, nemo
      quaerat tempore. Consequatur adipisci, ad eius deleniti voluptates, nihil
      est facere similique placeat, corrupti commodi quia aut ipsam a fuga
      iusto? Architecto, voluptate praesentium. Doloribus minima quas magnam!
      Consequatur natus, vel itaque reiciendis veniam ratione totam fugiat
      numquam illum nisi voluptatibus, dignissimos quod quae. Dolor nostrum
      quidem inventore vitae optio velit molestiae libero iste deleniti iure cum
      aspernatur, illum doloremque voluptatibus aut officia assumenda autem
      similique saepe eaque repellat, nihil modi! Possimus voluptatem modi ex,
      quod molestias porro natus odio, nesciunt officiis qui praesentium
      obcaecati eius dolores! Dolor voluptates dignissimos ex pariatur amet
      provident reiciendis optio blanditiis eveniet id! Facere id mollitia
      quidem voluptatem cupiditate est ducimus aut reiciendis quae et neque,
      nostrum fugit sapiente cumque, quos velit placeat blanditiis. Sed adipisci
      dolorum fugit ullam nihil fugiat deleniti. Exercitationem quos doloremque
      provident aut suscipit distinctio aperiam consectetur pariatur culpa sed
      voluptatum debitis tempore perspiciatis dolorum necessitatibus, voluptas
      eum minima qui dolor. Aut ipsa, eos voluptatem perspiciatis ad enim
      voluptatibus aliquam, cum totam, error corrupti dolore pariatur facere.
      Esse adipisci accusantium dolore sunt sint unde sed quas? Ipsa, similique
      sapiente, repellat officia modi nulla distinctio hic adipisci temporibus
      minima ullam laudantium, commodi at ab assumenda nesciunt fugit deleniti
      iusto sunt debitis vitae veritatis? Accusamus, ab recusandae. Soluta
      reprehenderit quos, quis et dolorem nostrum harum molestiae sit vero unde
      in magni qui explicabo vel nesciunt maxime! Blanditiis modi consequatur
      magni fugit soluta ea accusamus. Rem provident, explicabo veritatis
      deleniti, ipsum sunt nesciunt autem vel ratione vitae in quis dolorum
      quasi mollitia exercitationem? Laboriosam quibusdam voluptas eius
      reiciendis soluta assumenda facilis enim, placeat illum sapiente? Labore
      ducimus, blanditiis assumenda distinctio eligendi corrupti explicabo
      repellat aspernatur deleniti maiores nam, consectetur officia libero
      obcaecati ratione perferendis accusantium quas quia exercitationem sed
      reprehenderit cupiditate. Necessitatibus corporis quod veniam consequuntur
      pariatur, deserunt, assumenda laudantium sed asperiores sequi neque?
    </p>
  );
};
const Box = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [cont, setCont] = useState(0);
  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          box.style.background = "red";
          setCont((prev) => prev + 1);
        } else {
          box.style.background = "blue";
        }
      },
      { root: null, threshold: 0.9 }
    );
    observer.observe(box);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div
      ref={boxRef}
      style={{ width: "300px", height: "300px", background: "blue" }}
    >
      {cont}
    </div>
  );
};

const Observer = ({}: ObserverProps) => {
  return (
    <div>
      <h1>Observer</h1>
      <Text />
      <Box />
      <Text />
    </div>
  );
};

export default Observer;
