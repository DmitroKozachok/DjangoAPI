import { useGetPostsQuery } from "../../../services/postService";
import CardPost from "./CardPost.tsx";
import {Link} from "react-router";

const ListPostPage = () => {
    const { data: posts, isLoading } = useGetPostsQuery();

    if (isLoading) return <div className="text-center text-gray-500">Завантаження...</div>;

    if (!posts?.length)
        return (
            <div className="max-w-2xl mx-auto p-4">
                <Link
                    to="/posts/create"
                    className="
                  flex items-center justify-center
                  w-10 h-10
                  rounded-full
                  bg-purple-700 dark:bg-purple-600
                  text-white text-3xl
                  shadow-lg shadow-purple-500/30
                  hover:bg-purple-800 dark:hover:bg-purple-700
                  mb-6
                "
                    title="Створити пост"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                </Link>
                <div className="text-center text-gray-500 dark:text-gray-400">Постів немає 😔</div>
            </div>
        );

    return (
        <div className="max-w-2xl mx-auto p-4">
            <Link
                to="/posts/create"
                className="
                  flex items-center justify-center
                  w-10 h-10
                  rounded-full
                  bg-purple-700 dark:bg-purple-600
                  text-white text-3xl
                  shadow-lg shadow-purple-500/30
                  hover:bg-purple-800 dark:hover:bg-purple-700
                  mb-6
                "
                title="Створити пост"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
            </Link>
            {posts.map((post) => (
                <CardPost key={post.id} post={post} />
            ))}
        </div>
    );
};

export default ListPostPage;
