//  ! TRIED TO USE CREATE POST AS A WAY TO UPDATE. DIDN'T WORK
// ! IT BROKE THE SITE SO I NIXED IT

// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import { callApi } from "../api";

// import { Button } from "@material-ui/core";
// import "./specificStyles.css";

// const Update = ({ token, post }) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [location, setLocation] = useState("");
//   const [deliver, setDeliver] = useState(false);
//   const history = useHistory();  

//   const handleUpdate = async (event) => {
//     event.preventDefault();
//     const data = await callApi({
//       url: `/posts/${post._id}`,
//       body: { post: { title, description, price, location, willDeliver } },
//       method: "PATCH",
//       token: token,
//     });
//   };

//     const postSuccess = data?.success;
//     if (postSuccess) {
//       window.alert("Post submitted!")
//       history.push("/"); // only shows created post after refresh because it's history pushing.
//     } else {
//       window.alert("Post wasn't successful");
//     }
// console.log("data", data)


//   return (
//     <div className="createPostPage">
//       <h2 className="createPostTitle">Create Post</h2>
//       <form onSubmit={handleUpdate}>
//         <div>
//           <div className="titleText" htmlFor="Title">
//             Title:
//           </div>
//           <input
//             className="title"
//             type="text"            
//             required
//             onChange={(event) => setTitle(event.target.value)}
//           ></input>
//         </div>
//         <div>
//           <div className="descriptionText" htmlFor="Description">
//             Description:
//           </div>
//           <textarea
//             className="description"
//             type="text"           
//             required
//             onChange={(event) => setDescription(event.target.value)}
//           ></textarea>
//         </div>
//         <div>
//           <div className="priceText" htmlFor="Price">
//             Price:
//           </div>
//           <input
//             className="price"
//             type="number"
//             required
//             onChange={(event) => setPrice(event.target.value)}
//           ></input>
//         </div>
//         <div>
//           <div className="locationText" htmlFor="Location">
//             Location:
//           </div>
//           <input
//             className="location"
//             type="text"            
//             required
//             onChange={(event) => setLocation(event.target.value)}
//           ></input>
//         </div>
//         <div className="willDeliver">
//           <div>
//             Will Deliver ?{" "}
//             <select
//               value={deliver}
//               onChange={(event) => {
//                 setDeliver(event.target.value);
//               }}
//             >
//               <option value={true}> -- select an option -- </option>
//               <option value="Yes">Yes</option>
//               <option value="No">No</option>
//             </select>
//           </div>
//         </div>
//         <div>
//           <Button
//             type="submit"
//             style={{
//               display: "flex",
//               marginTop: "15px",
//               marginLeft: "15px",
//               backgroundColor: "blue",
//               color: "white",
//             }}
//           >
//             Update
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Update;