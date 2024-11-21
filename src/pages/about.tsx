import { FC } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage: FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10 px-6">
      <div className="max-w-5xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">About bitBlogs</h1>
        <p className="text-gray-400 mb-10">
          Empowering tech enthusiasts to share knowledge and inspire innovation.
        </p>
      </div>

      <div className="max-w-5xl w-full flex flex-col lg:flex-row items-center lg:items-start mb-10 gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-400">
            At bitBlogs, we believe in the power of shared knowledge. Our mission
            is to create a platform where tech enthusiasts, developers, and
            innovators can come together to share ideas, learn from each other,
            and push the boundaries of what's possible in the world of
            technology.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-64 h-64 bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl w-full text-center mb-10">
        <h2 className="text-2xl font-semibold mb-6">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-white">
                📚 Rich Content
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-400">
              Access a wide range of articles, tutorials, and insights on the
              latest tech trends and best practices.
            </CardContent>
          </Card>
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-white">
                🌐 Vibrant Community
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-400">
              Connect with like-minded individuals, share your knowledge, and
              grow your professional network.
            </CardContent>
          </Card>
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-white">
                🚀 Cutting-edge Topics
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-400">
              Stay ahead of the curve with content covering emerging technologies
              and innovative solutions.
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="max-w-5xl w-full bg-gray-800 rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-400">
          Founded in 2023, bitBlogs started as a small project by a group of
          passionate developers who wanted to create a space for sharing their
          experiences and learning from others. What began as a simple blog
          quickly grew into a thriving community of tech enthusiasts from all
          around the world.
        </p>
        <p className="text-gray-400 mt-4">
          Today, bitBlogs is proud to be a leading platform for
          technology-focused content, fostering innovation and collaboration in
          the ever-evolving world of tech.
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Join Us on Our Journey</h2>
        <p className="text-gray-400 mb-6">
          Whether you're a seasoned developer, a curious beginner, or somewhere
          in between, there's a place for you at bitBlogs. Let's shape the
          future of technology together.
        </p>
      <Link to="/SignUp">
        <Button>Get Started Today</Button>
      </Link>
      </div>
    </div>
  );
};

export default AboutPage;
