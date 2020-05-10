import React from 'react';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import ProductItem from './ProductItem';
// import { Container } from './styles';

const ProductList = ({
    products
}) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Id</TableCell>
                        <TableCell align="left">Title</TableCell>
                        <TableCell align="left">Type</TableCell>
                        <TableCell align="left">Description</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Rating</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => <ProductItem key={product.id} product={product}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ProductList;