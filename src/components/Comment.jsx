import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment () {

    return (

        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/65419098?v=4"/>
            <div className={styles.commentBox}>

                <div className={styles.commentContent}>

                    <header>

                        <div className={styles.authorAndTime}>

                            <strong>Valmir Virtuoso</strong>
                            <time title="11 de maio às 8:13h" dateTime="2022-05-11 08:13:30">Cerca de uma 1h atrás</time>

                        </div>

                        <button title="Deletar comentário">

                            <Trash size={24}/>

                        </button>

                    </header>

                    <p>Muito bom Devon, parabéns!!</p>

                </div>

                <footer>

                    <button>

                        <ThumbsUp />
                        Aplaudir <span>20</span>

                    </button>

                </footer>

            </div>

        </div>

    )

}