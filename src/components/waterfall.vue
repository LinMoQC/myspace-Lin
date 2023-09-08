<style lang="less" scoped>
* {
    margin: 0;
    padding: 0;
}

.container-water-fall {
    width: 850px;
    box-sizing: border-box;

    h4 {
        padding-top: 56px;
        padding-bottom: 28px;
        font-family: PingFangSC-Medium;
        font-size: 36px;
        color: #000000;
        letter-spacing: 1px;
        text-align: justify;
    }

    button {
        background-color: #ff0;
        color: #24292e;
        border: 1px solid rgba(27, 31, 35, 0.2);
        border-radius: 0.25em;
        width: 100px;
        line-height: 26px;
        font-size: 13px;
        margin: 4px 0;
        margin-right: 4px;
        cursor: pointer;
        outline: none;

        &.blue-light {
            background: #27fbc2;
        }
    }

    button:hover {
        background-image: linear-gradient(-180deg, #fafbfc, #ccc 90%);
    }

    .cell-item {
        width: 100%;
        // margin-bottom: 18px;
        background: #ffffff;
        border: 2px solid #F0F0F0;
        border-radius: 12px 12px 12px 12px;
        overflow: hidden;
        box-sizing: border-box;
        margin-bottom: 10px;

        img {
            // border-radius: 12px 12px 0 0;
            width: 100%;
            height: auto;
            display: block;
        }

        .item-body {
            // border: 1px solid #F0F0F0;
            padding: 12px;

            .item-desc {
                font-size: 15px;
                color: #333333;
                line-height: 15px;
                font-weight: bold;
            }

            .item-footer {
                margin-top: 22px;
                position: relative;
                display: flex;
                align-items: center;

                .avatar {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background-repeat: no-repeat;
                    background-size: contain;
                }

                .name {
                    max-width: 150px;
                    margin-left: 10px;
                    font-size: 14px;
                    color: #999999;
                }

                .like {
                    position: absolute;
                    right: 0;
                    display: flex;
                    align-items: center;

                    &.active {
                        i {}

                        .like-total {
                            color: #FF4479;
                        }
                    }

                    i {
                        width: 28px;
                        display: block;
                    }

                    .like-total {
                        margin-left: 10px;
                        font-size: 12px;
                        color: #999999;
                    }
                }
            }
        }
    }
}

.githubdata {
    float: right;
    margin-right: 90px;

    img {
        width: 14px;
        // height: 16px;
    }
}
</style>
<template>
<div class="container-water-fall">
    <waterfall :col="col" :data="data" @loadmore="loadmore" :gutterWidth="10">
        <template>
            <div class="cell-item" v-for="(item, index) in data" :key="index">
                <img v-if="item.img" :src="item.img" alt="加载错误" />
            </div>
        </template>
    </waterfall>
    <loading :show="loading" />
</div>
</template>

<script>
import loading from "./loading";
import axios from "axios";
export default {
    props: {
        title: String,
    },
    components: {
        loading,
    },
    data() {
        return {
            data: [],
            col: 4,
            loading: false,
            gitHubData: {},
            originData: [],
        };
    },
    computed: {
        itemWidth() {
            return 133 * 0.5 * (document.documentElement.clientWidth / 375);
        },
        gutterWidth() {
            return 10 * 0.5 * (document.documentElement.clientWidth / 375);
        },
    },
    methods: {
        loadmore() {
            this.loading = true;
            setTimeout(() => {
                this.data = this.data.concat(this.originData, this.originData);
                this.loading = false;
            }, 1000);
        },

        getData() {
            axios.get('data.json')
                .then(res => {
                    console.log(res);
                    const jsonData = res.data;
                    if (Array.isArray(jsonData)) {
                        this.originData = jsonData;
                        this.data = this.originData;
                        console.log(this.originData);
                    }
                })
                .catch(error => {
                    console.error('请求失败:', error);
                });
        },
    },
    mounted() {
        this.getData();
    },
};
</script>
