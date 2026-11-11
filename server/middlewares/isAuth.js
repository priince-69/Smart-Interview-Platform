// import jwt from 'jsonwebtoken'

// const isAuth = async (req,res,next) => {
//     try {
//         let {token} = req.cookies

//         if(!token){
//             return res.status(400).json({message:"User Does Not Have a Token"})
//         }
        
//         const verifyToken = jwt.verify(token, process.env.JWT_SECRET)

//         if(!verifyToken){
//             return res.status(400).json({message:"User Does Not Have a Valid Token"})
//         }

//         req.userId = verifyToken.userId

//         next()


//     } catch (error) {
//         return res.status(500).json({message:`isAuth error ${error}`})
//     }
// }

// export default isAuth


import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
    try {
        const { token } = req.cookies;

        if (!token) {
            return res.status(401).json({
                message: "Authentication required. Please login."
            });
        }

        const verifyToken = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.userId = verifyToken.userId;

        next();

    } catch (error) {
        console.error("Authentication Error:", error.message);

        return res.status(401).json({
            message: "Invalid or expired token. Please login again."
        });
    }
};

export default isAuth;