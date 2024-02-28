import { useForm } from "react-hook-form"
import styles from './MyInfo.module.css'
import { useEffect } from "react"

const USER_DATA = 'userData'

const MyInfo = () =>{
    const { register, handleSubmit, reset, formState:{errors}, setValue } = useForm()

    useEffect(()=>{
        try {
            const userData = JSON.parse(localStorage.getItem(USER_DATA))

            setValue('name',userData?.name)
            setValue('age',userData?.age)
            setValue('email',userData?.email)
        } catch (error) {
            console.log(error)
        }
    },[])

    const handleClearClick = () => {
        reset()
    }

    const handleSubmitForm = (data) => {
        try {
            localStorage.setItem(USER_DATA, JSON.stringify(data))
            alert('Se registro con exito!')
        } catch (error) {
            alert('Ha ocurrido un error')
        }
    }

    console.log(errors)

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)} className={styles.form}>
            <label className={styles.label}>
                Name
                <input {...register('name', { required:true, minLength:4, maxLength:70 })}>
                </input>
            </label>

            <label className={styles.label}>
                Age
                <input {...register('age', { required:true, min:1, max:100, valueAsNumber:true})} type="number">
                </input>
            </label>

            <label className={styles.label}>
                Email
                <input {...register('email', { required:true, minLength:4, maxLength:60 })}>
                </input>
            </label>

            <div className={styles.btnContainer}>
                <button type="button" onClick={handleClearClick}>Clear</button>
                <button type="submit">Save</button>
            </div>
        </form>
    )
}

export default MyInfo