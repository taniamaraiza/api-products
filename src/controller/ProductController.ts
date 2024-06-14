import { Request, Response } from "express";
import Product from "../database/schemas/Product";

class ProductController {
    async findByName(request: Request, response: Response) {
        const { name } = request.query;

        try {
            const productExists = await Product.findOne({name});

            if (!productExists) {
                return response.status(400).json({
                    error: "Ooops",
                    message: "This product is not found",
                });
            }

            return response.json(productExists);
        }catch (error)  {
            return response.status(500).json({
                error: "something wrong happened, try again",
                message: error,
            });
        }
    }

    async updateProductById(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const productExists = await Product.findOne({_id: id});

            if (!productExists) {
                return response.status(400).json({
                    error: "Ooops",
                    message: "This product is not found",
                });
            }

            await Product.updateOne({ _id: id}, request.body);

            return response.json({ message: `Product ${id} updated with success` });
        }catch (error)  {
            console.log(error)
            return response.status(500).json({
                error: "something wrong happened, try again",
                message: error,
            });
        }
    }

    async deleteProductById(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const productExists = await Product.findOne({_id: id});

            if (!productExists) {
                return response.status(400).json({
                    error: "Ooops",
                    message: "This product is not found",
                });
            }

            await Product.deleteOne({ _id: id});

            return response.json({ message: `Product ${id} deleted with success` });
        }catch (error)  {
            console.log(error)
            return response.status(500).json({
                error: "something wrong happened, try again",
                message: error,
            });
        }
    }

    async findById(request: Request, response: Response) {

        const { id } = request.query;

        try {
            const productExists = await Product.findOne({id});

            if (!productExists) {
                return response.status(400).json({
                    error: "Ooops",
                    message: "This product is not found",
                });
            }

            return response.json(productExists);
        }catch (error)  {
            return response.status(500).json({
                error: "something wrong happened, try again",
                message: error,
            });
        }
    }

    async find(request: Request, response: Response) {
        try {
            const products = await Product.find();
            return response.json(products);
        }catch (error)  {
        return response.status(500).json({
            error: "something wrong happened, try again",
            message: error,
        });
    }
}

    async create(request: Request, response: Response) {
        const { name, description, color, weight, type, price } = request.body;
        
        try {
            const productExists = await Product.findOne({name});

            if (productExists) {
                return response.status(400).json({
                    error: "Ooops",
                    message: "This prodcut already exist",
                });
            }

            const product = await Product.create({
                name, 
                description, 
                color, 
                weight, 
                type, 
                price
            });

            return response.json(product);
        } catch (error) {
            return response.status(500).json({
                error: "Registration failed" ,
                message: error
            })
        }   
    }
}    

export default new ProductController;