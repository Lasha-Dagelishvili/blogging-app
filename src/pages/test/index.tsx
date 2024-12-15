import { Input } from "@/components/ui/input";
import CreateBlogForm from "@/pages/test/blog/create";
import { supabase } from "@/supabase";
import qs from "qs";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useDebounce } from "@uidotdev/usehooks";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type SingleBlog = {
    created_at: string;
    description: string | null;
    id: number;
    image_url: string | null;
    title: string | null;
    user_id: string | null;
};

type BlogsFilterFormValues = {
    searchText: string;
};

const TestView = () => {
    const [blogs, setBlogs] = useState<SingleBlog[]>([]);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const parsedQueryParams = qs.parse(searchParams.toString());

const searchText =
    typeof parsedQueryParams.searchText === "string"
        ? parsedQueryParams.searchText
        : undefined;

const { control, watch } = useForm<BlogsFilterFormValues>({
    defaultValues: {
    searchText,
    },
});

    const watchedSearchText = watch("searchText");
    const debouncedSearchText = useDebounce(watchedSearchText, 500);

    useEffect(() => {
    const updatedParams = qs.stringify({ searchText: watchedSearchText });
    navigate(`?${updatedParams}`, { replace: true });
}, [watchedSearchText, navigate]);

    useEffect(() => {
    if (debouncedSearchText?.length > 2) {
        supabase
            .from("blogs")
            .select("*")
            .ilike("title", `%${debouncedSearchText}%`)
            .throwOnError()
            .then((res) => {
            const blogsList = res.data as unknown as SingleBlog[];
            setBlogs(blogsList);
        });
    } else if (!debouncedSearchText) {
        supabase
            .from("blogs")
            .select("*")
            .throwOnError()
            .then((res) => {
            const blogsList = res.data as unknown as SingleBlog[];
            setBlogs(blogsList);
        });
    }
}, [debouncedSearchText]);

    return (
        <div className="flex flex-col gap-y-10 text-white">
        <CreateBlogForm />
        <div className="flex items-center justify-center gap-x-4 px-44">
            <Controller
            control={control}
            name="searchText"
            render={({ field: { onChange, value } }) => {
                return (
                <Input
                    className="text-black"
                    onChange={onChange}
                    value={value}
                    placeholder="Enter Search Text..."
                />
                );
            }}
            />
        </div>
        <div className="flex flex-col gap-y-10 px-32">
            {blogs.map((blog) => {
            const blogImageUrl = blog?.image_url
                ? `${import.meta.env.VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL}/${blog?.image_url}`
                : "";

            const formattedDate =
                dayjs(blog.created_at).isAfter(dayjs().subtract(1, "day"))
                ? dayjs(blog.created_at).fromNow()
                : dayjs(blog.created_at).format("HH:mm - DD/MM/YYYY");

            return (
                <div
                key={blog.id}
                className="flex flex-col gap-y-4 border border-gray-400 p-6"
                >
                <div>
                    <img
                    className="border border-white w-full bg-white"
                    src={blogImageUrl}
                    alt="logo"
                    />
                </div>
                <div>{blog?.title}</div>
                <div>{blog?.description}</div>
                <div className="text-gray-400">{formattedDate}</div>
                </div>
            );
            })}
        </div>
        </div>
    );
};

export default TestView;
