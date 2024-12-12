import { Input } from "@/components/ui/input";
import CreateBlogForm from "@/pages/test/blog/create";
import { supabase } from "@/supabase";
import qs from "qs";
import { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import underscore from "underscore";


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
    
    const parsedQueryParams = qs.parse(searchParams.toString());

    const { control, watch } = useForm<BlogsFilterFormValues>({
        defaultValues: parsedQueryParams,
      });

    useEffect(() => {
        const parsedSearchParams = qs.parse(searchParams.toString());

        const searchText = parsedSearchParams?.searchText;

        supabase
        .from("blogs")
        .select("*")
        .ilike("title", `%${searchText ?? ""}%`)
        .throwOnError()
        .then((res) => {
            const blogsList = res.data as unknown as SingleBlog[];
            setBlogs(blogsList);
        });
    }, []);

    
  const watchedSearchText = watch("searchText");

    const fetchBlogs = useCallback(
        underscore.debounce((watchedSearchText: string) => {
        supabase
            .from("blogs")
            .select("*")
            .ilike("title", `${watchedSearchText}%`)
            .throwOnError()
            .then((res) => {
            const blogsList = res.data as unknown as SingleBlog[];
            setBlogs(blogsList);
            });
        }, 500),
        [],
    );

    useEffect(() => {
        if (watchedSearchText?.length > 2) {
          fetchBlogs(watchedSearchText);
        }
      }, [watchedSearchText, fetchBlogs]);

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
                return (
                    <div
                        key={blog.id}
                        className="flex flex-col gap-y-4 border border-gray-400 p-6"
                        >
                        <div>
                            <img className="border border-white w-full bg-white" src={blogImageUrl} />
                        </div>
                        <div>{blog?.title}</div>
                        <div>{blog?.description}</div>
                        </div>
                    );
                    })}
            </div>
        </div>
        );
};

export default TestView;
