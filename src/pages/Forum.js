import React, { useState } from "react";

const Forum = ({ onBack }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "dev_guru",
      avatar: "https://i.pravatar.cc/40?img=1",
      content: "Best resources for learning React? Any recommendations?",
      upvotes: 10,
      timestamp: "2h ago",
    },
    {
      id: 2,
      username: "tech_hacker",
      avatar: "https://i.pravatar.cc/40?img=2",
      content: "How to prepare for tech interviews? Key topics to focus on?",
      upvotes: 15,
      timestamp: "3h ago",
    },
  ]);
  
  const [newPostContent, setNewPostContent] = useState("");

  const handleCreatePost = () => {
    if (newPostContent.trim()) {
      const newPost = {
        id: posts.length + 1,
        username: "new_user",
        avatar: "https://i.pravatar.cc/40?img=3",
        content: newPostContent,
        upvotes: 0,
        timestamp: "Just now",
      };
      setPosts([newPost, ...posts]);
      setNewPostContent("");
    }
  };

  const upvotePost = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, upvotes: post.upvotes + 1 } : post
      )
    );
  };

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={onBack}>
        ← Back
      </button>
      <h2 style={styles.sectionTitle}>Forum</h2>

      <div style={styles.createPostContainer}>
        <textarea
          placeholder="What's on your mind?"
          style={styles.textarea}
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
        />
        <button style={styles.postButton} onClick={handleCreatePost}>
          Post
        </button>
      </div>

      <div style={styles.postsContainer}>
        {posts.map((post) => (
          <div key={post.id} style={styles.postCard}>
            <div style={styles.postHeader}>
              <img src={post.avatar} alt="avatar" style={styles.avatar} />
              <div>
                <span style={styles.username}>@{post.username}</span>
                <span style={styles.timestamp}>{post.timestamp}</span>
              </div>
            </div>
            <p style={styles.postContent}>{post.content}</p>
            <div style={styles.postActions}>
              <button style={styles.upvoteButton} onClick={() => upvotePost(post.id)}>
                ⬆ {post.upvotes}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { maxWidth: "600px", margin: "auto", padding: "20px" },
  sectionTitle: { fontSize: "22px", fontWeight: "bold", marginBottom: "20px" },
  
  backButton: {
    backgroundColor: "#ff4d4d",
    color: "#fff",
    padding: "8px 15px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    marginBottom: "15px",
  },

  createPostContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
    padding: "10px",
    backgroundColor: "#f0f2f5",
    borderRadius: "10px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    minHeight: "60px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    resize: "none",
    fontSize: "14px",
  },
  postButton: {
    backgroundColor: "#1DA1F2",
    color: "#fff",
    padding: "8px 15px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "500",
    alignSelf: "flex-end",
  },

  postsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  postCard: {
    padding: "15px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    border: "1px solid #ddd",
  },
  postHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "5px",
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },
  username: {
    fontSize: "14px",
    fontWeight: "bold",
    marginRight: "5px",
  },
  timestamp: {
    fontSize: "12px",
    color: "#555",
  },

  postContent: {
    fontSize: "15px",
    color: "#333",
    marginBottom: "10px",
  },
  
  postActions: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  upvoteButton: {
    backgroundColor: "#17BF63",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
  },
};

export default Forum;