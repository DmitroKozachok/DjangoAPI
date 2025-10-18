import { Link } from "react-router";

const NotFoundPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white p-6">
            <h1 className="text-7xl md:text-9xl font-extrabold text-purple-600 dark:text-purple-400 mb-4 animate-pulse">404</h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-center">
                Вибачте, сторінку не знайдено!
            </h2>

            <div className="mb-6">
                <img
                    src="https://media.giphy.com/media/26gsgIdVt7Xw1M7eA/giphy.gif"
                    alt="Lost astronaut"
                    className="w-64 md:w-80 mx-auto animate-spin-slow rounded-xl shadow-lg"
                />
            </div>

            <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
                Сторінка, яку ви шукаєте, можливо була видалена або ніколи не існувала.
            </p>

            <Link
                to="/"
                className="inline-block bg-purple-600 dark:bg-purple-500 hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors text-white px-8 py-3 rounded-full text-lg font-medium shadow-md hover:shadow-xl"
            >
                Повернутися додому
            </Link>
        </div>
    );
};

export default NotFoundPage;
