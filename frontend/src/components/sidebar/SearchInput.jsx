import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";
import useGetConversations from "../hooks/useGetConversations";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be atleast 3 character long!");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No such user found!");
    }
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input input-bordered rounded-full "
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-circle bg-sky-500 text-white" type="submit">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;

/*
STARTER CODE FOR SNIPPET

import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        className="input input-bordered rounded-full "
        placeholder="Search..."
      />
      <button className="btn btn-circle bg-sky-500 text-white" type="submit">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;

*/
