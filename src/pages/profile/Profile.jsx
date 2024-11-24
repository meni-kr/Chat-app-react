import { useSelector } from "react-redux"


export function Profile(){
    const user = useSelector(storeState=>storeState.userModule.user)
    console.log('user:', user)
    return (<div>
        <h1>profile</h1>
        <p>Email: {user.email}</p>
    </div>
    )
}