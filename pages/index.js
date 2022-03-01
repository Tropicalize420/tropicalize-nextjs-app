import styles from "../styles/Home.module.css";
import { useContext } from "react";
import { Context } from "../context/AppProvider";
import Buildings from "../public/elementscrop.png";
import Tropi from "../public/tropi_city.png";
import Image from "next/image";
//
export default function Home() {
  //
  const { state } = useContext(Context);
  console.log(state);
  //
  return (
    <div className={styles.main_container}>
      <div className={styles.container_div}>
        <div className={styles.wrapper}>
          <section className={styles.section}>
            <Image
              src={Tropi}
              alt="Img Here"
              className={styles.foreground}
              // src="https://res.cloudinary.com/alecos008/image/upload/v1644504881/Web_Cover_kfhrww.png"
            />
            <Image
              src={Buildings}
              alt="Img Here"
              className={styles.background}
              style={{ minHeight: "150vh" }}
            />

            <h2 className={styles.title}>Welcome to Tropicalize's Landing Page</h2>
          </section>
        </div>
        <article className={styles.article}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            facilis unde illo neque at hic quisquam, nulla consectetur, itaque
            maxime sit iusto aliquam culpa reiciendis eaque recusandae vitae
            modi, animi expedita perferendis inventore. Culpa incidunt odit
            dicta quibusdam ullam facilis eum magnam, consectetur voluptates
            praesentium, pariatur eos nihil! Natus in, autem aut facere repellat
            eveniet commodi illo ullam hic fugit deserunt explicabo esse atque
            reprehenderit optio, dicta suscipit sed! Porro fugiat numquam vel
            magni, iure provident consequuntur velit ut quia itaque repudiandae
            molestiae, nobis sequi incidunt autem! Cum impedit accusamus
            laboriosam eaque necessitatibus consectetur incidunt a
            exercitationem molestias doloribus tenetur amet, ullam at
            repudiandae, quos reprehenderit adipisci assumenda dolor enim
            voluptas natus! Assumenda praesentium voluptate culpa quidem quasi
            impedit unde incidunt odit velit, dolore officiis distinctio, fugit,
            optio sed. Quos nesciunt eius reprehenderit ipsa consectetur
            tempora, fugiat provident corporis perspiciatis veritatis totam
            temporibus voluptates soluta vitae mollitia molestias reiciendis
            expedita doloribus est. Maxime et fugit expedita id sed cumque harum
            dignissimos aperiam voluptatum quos obcaecati illo tempore
            consectetur, sunt perferendis eius aliquid soluta praesentium
            voluptatem assumenda ex fuga. Iusto, possimus? Dolores deleniti
            eaque, aperiam consequuntur odit culpa, a rchitecto, quas veniam
            provident inventore eius. Laboriosam in reprehenderit quidem?
            Officiis illum molestiae, praesentium velit, illo debitis quasi fuga
            laborum veritatis necessitatibus fugiat cupiditate! Quia animi
            provident maxime numquam porro itaque! Provident, rerum. Aliquid cum
            quo ducimus ad? Repellat nihil, saepe beatae rerum sint eveniet
            voluptate officiis velit autem officia tempore deserunt sequi quod
            quae culpa sed. Reprehenderit eveniet ipsum nihil ipsam quam
            facilis, possimus modi placeat ratione soluta voluptate obcaecati
            error minima enim, fugiat quaerat architecto, iure dignissimos a eum
            quidem eos at fuga. Consectetur, quisquam at reprehenderit in
            exercitationem inventore incidunt dolorum quos adipisci labore?
            Fugiat facilis ipsum minus, officiis eos modi sequi distinctio
            pariatur reprehenderit accusantium labore obcaecati, recusandae
            saepe?
          </p>
        </article>
      </div>
    </div>
  );
}
