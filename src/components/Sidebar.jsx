import styles from './Sidebar.module.css';
import { PencilLine } from '@phosphor-icons/react';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://plus.unsplash.com/premium_photo-1661766896016-16e307246d5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className={styles.profile}>
                <img 
                className={styles.avatar}
                src="https://github.com/Carlainha.png" alt="" />
                <strong>Caroline Radichi</strong>
                <span> Jogadora de The Sims 4</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}