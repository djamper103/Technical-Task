import Posts from "../components/posts/posts"
import Users from "../components/users/users"


export const routes = [
    { path: '/', element: <Users></Users>, exact: true },
    { path: "/Technical-Task", element: <Users></Users>, exact: true },
    { path: "posts", element: <Posts></Posts>, exact: true }
]