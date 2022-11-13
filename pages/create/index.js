import React, { useEffect, useState } from 'react'
import { category } from '..'
import styles from '../../styles/Create.module.css'
const Create = () => {

    const [state, setState] = useState(
        {
            title: '',
            description: '',
            category: '',
        }
    )


    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        setState(val => { return { ...val, [name]: value } });
    }
    return (
        <div className={styles.container}>
            <div className={styles.editdetails}>
                <div className={styles.label}>Title</div>
                <input className={styles.input} name="title" value={state.title} onChange={handleChange} maxLength={20}/>
                <div className={styles.label}>Category</div>
                <select className={styles.input} name="category" value={state.category} onChange={handleChange}>
                    {
                        category.map((e) => <option value={e}>{e}</option>)
                    }
                </select>
                <div className={styles.label}>Description</div>
                <textarea className={styles.input} style={{ height: '220px', resize: 'vertical', padding: '20px' }} name="description" onChange={handleChange} />
            </div>
            <div className={styles.unityground}>
                <video className={styles.video} src="http://localhost:3000/videos/demo.mp4" autoplay="true"
                    muted="muted" loop />
            </div>
        </div>
    )
}

export default Create