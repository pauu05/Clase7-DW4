import { Post } from "../models/post.js";

export const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) {
            return res.status(404).send("Post no encontrado");
        }
        res.send("Post eliminado exitosamente");
    } catch (err) {
        console.error("Error al eliminar el post", err);
        res.status(500).send("Error interno del servidor");
    }
};
