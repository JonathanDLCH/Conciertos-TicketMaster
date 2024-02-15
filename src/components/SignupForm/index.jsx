import { useForm } from "react-hook-form"

const SignupForm = () =>{

    const { register, handleSubmit, reset, formState:{errors} } = useForm()

    const handleClearClick = () => {
        reset()
    }

    const handleSubmitForm = (data) => {
        console.log(data)
    }

    console.log(errors)

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <label>
                Name
                <input {...register('name', { required:true })}>
                </input>
            </label>

            <label>
                Age
                <input {...register('age', { required:true })}>
                </input>
            </label>

            <label>
                Address
                <input {...register('address', { required:true })}>
                </input>
            </label>

            <label>
                Zipcode
                <input {...register('zipcode', { required:true })}>
                </input>
            </label>

            <label>
                Phone
                <input {...register('phone', { required:true })}>
                </input>
            </label>
            <br />
            <div>
                <button type="button" onClick={handleClearClick}>Clear</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default SignupForm