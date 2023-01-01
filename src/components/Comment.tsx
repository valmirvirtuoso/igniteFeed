import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface CommentProps {

    content: string;
    onDeleteComment: (comment: string) => void;

}

export function Comment ({content, onDeleteComment}: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment () {

        onDeleteComment(content);

    }

    function handleLikeComment () {

        setLikeCount((currentState) => {

            return currentState + 1;

        });

    }

    return (

        <div className={styles.comment}>

            <Avatar 
                hasBorder={false} 
                src="https://avatars.githubusercontent.com/u/65419098?v=4" 
                alt=""
            />
            
            <div className={styles.commentBox}>

                <div className={styles.commentContent}>

                    <header>

                        <div className={styles.authorAndTime}>

                            <strong>Valmir Virtuoso</strong>
                            <time title="11 de maio às 8:13h" dateTime="2022-05-11 08:13:30">Cerca de uma 1h atrás</time>

                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">

                            <Trash size={24}/>

                        </button>

                    </header>

                    <p>{content}</p>

                </div>

                <footer>

                    <button onClick={handleLikeComment}>

                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>

                    </button>

                </footer>

            </div>

        </div>

    )

}