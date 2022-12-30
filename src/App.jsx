import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/SideBar";

import "./global.css";
import styles from "./App.module.css";

export function App() {

  // author { avatar_url: "", name: "", role: ""}
  // publishedAt: Date
  // content: String

  const posts = [

    {

      id: 1,
      author: {

        avatarUrl: "https://avatars.githubusercontent.com/u/65419098?v=4",
        name: "Gabriel Ferreira",
        role: "Desenvolvedor Front-end"

      },
      content: [

        { type: "paragraph", content: "Fala galeraa!"},
        { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento Rocketseat. Onome do projeto é DoctorCare!"},
        { type: "link", content: "jane.design/doctorcare"},

      ],
      publishedAt: new Date("2022-05-03 20:00:00"),

    },

    {

      id: 2,
      author: {

        avatarUrl: "https://media.licdn.com/dms/image/C4E03AQGDcb8z9mDlCw/profile-displayphoto-shrink_200_200/0/1654025900349?e=1677715200&v=beta&t=P01BwPo8vxpzoME6UIfMwG3Zpjey_fyHisYq6bGg86g",
        name: "Valmir Virtuoso",
        role: "Desenvolvedor Front-end"

      },
      content: [

        { type: "paragraph", content: "Fala galeraa!"},
        { type: "paragraph", content: "Acabei2 de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento Rocketseat. Onome do projeto é DoctorCare!"},
        { type: "link", content: "jane.design/doctorcare"},

      ],
      publishedAt: new Date("2022-12-29 20:00:00"),

    },

  ];

  return (

    <div>

      <Header />

      <div className={styles.wrapper}>

        <Sidebar />
        <main>

            {

              posts.map(post => {

                return (

                  <Post 
                  
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                  
                  />

                )

              })

            }

        </main>

      </div>

    </div>

  )
}


