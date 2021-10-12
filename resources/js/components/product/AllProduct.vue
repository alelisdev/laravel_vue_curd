<template>
    <div>
        <h2 class="text-center">Products List</h2>
        <div v-if="isLoading" class="article-preview">Loading articles...</div>
        <div v-else>
            <mdb-tbl btn responsive striped>
                <mdb-tbl-head>
                    <tr>
                        <th>ID</th>
                        <th>Nme</th>
                        <th>Detail</th>
                        <th>Actions</th>
                    </tr>
                </mdb-tbl-head>
                <mdb-tbl-body>
                    <tr v-for="product in products" :key="product.id">
                        <td>{{ product.id }}</td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.detail }}</td>
                        <td>
                            <div class="btn-group" role="group">
                                <router-link
                                    :to="{
                                        name: 'edit',
                                        params: { id: product.id }
                                    }"
                                    class="btn btn-sm m-0 btn-success"
                                    >Edit</router-link
                                >
                                <button
                                    class="btn btn-danger btn-sm m-0"
                                    @click="deleteProduct(product.id)"
                                >
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                </mdb-tbl-body>
            </mdb-tbl>
        </div>
        <VPagination :pages="pages" :currentPage.sync="currentPage" />
    </div>
</template>

<script>
import {
    mdbTbl,
    mdbTblHead,
    mdbTblBody
} from 'mdbvue';
import VPagination from '../common/VPagination.vue';

export default {
    data () {
        return {
            products: [],
            pagination: {
                page: 1,
                total: 0,
                perPage: 0,
                visible: 7
            }
        }
    },
    computed: {

    },
    created () {
        this.axios.get('http://localhost:8000/api/products/').then(response => {
            this.products = response.data
        })
    },
    methods: {
        deleteProduct (id) {
            this.axios
                .delete(`http://localhost:8000/api/products/${id}`)
                .then(response => {
                    let i = this.products.map(data => data.id).indexOf(id)
                    this.products.splice(i, 1)
                })
        }
    },
    components: {
        mdbTbl,
        mdbTblHead,
        mdbTblBody,
        VPagination
    }
}
</script>
