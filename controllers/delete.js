import {Post} from "../models/post.js";

export const deletePost = async () => {
    await Post.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            console.log("Error al eliminar el post", err);
            res.status(500).send("Error interno del servidor");
        } else {
            res.send("Post eliminado exitosamente");
        }
    })
}