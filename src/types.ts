interface GarbSearchResult {
    // 神秘ID，貌似是装扮专用
    item_id: number
    // 名称
    name: string
    // 装扮/收藏集网页端跳转链接
    jump_link: string
    // 销量文本描述
    sale_count_desc: string
    properties: LotteryProperties | SuitProperties
}

interface LotteryProperties {
    dlc_act_id: number
    dlc_lottery_id: number

    // 销量
    dlc_lottery_sale_quantity: number
    image_cover: string
    type: "dlc_act"
}

interface SuitProperties {
    // 描述
    desc: string

    // 装扮API所需ID
    fan_id: string
    // 装扮所属者UID
    fan_mid: string

    // 我是xxx的xxx号装扮的背景图
    fan_share_image: string
    // 装扮本身背景图
    image_cover: string

    type: "ip"
}

interface SuitDetail {
    properties: SuitProperties
    suit_items: {
        card: {
            name: string
            properties: {
                // 粉丝牌颜色？
                fan_no_color: string
                // 粉丝牌背景图
                fans_image: string
                // 粉丝牌背景图？
                image: string
                // 粉丝牌背景图（小）？
                image_preview_small?: string
            }
        }[]
        card_bg: {
            name: string
            properties: {
                // 粉丝牌颜色？
                fan_no_color: string
                // 评论背景
                image: string
                // 评论背景预览
                image_preview_small: string
            }
        }[]
        emoji_package: {
            name: string
            properties: {
                // 表情包代表图？
                image: string
                // 表情包列表（JSON，{ name: string, image: string }[]）
                item_emoji_list: string
            }
            // 表情表列表（详细信息）
            items: {
                // 表情表名称（即评论区触发关键词，[xxx_xxx]）
                name: string
                properties: {
                    // 表情包图片链接
                    image: string
                    sale_type: string
                }
            }[]
        }[]
        loading: {
            name: string
            properties: {
                image_preview_small: string
                // 逐帧加载动画
                loading_frame_url: string
                // 动图加载动画
                loading_url: string
            }
        }[]
        // 进度条
        play_icon: {
            name: string
            properties: {
                drag_left_png: string
                drag_right_png: string
                middle_png: string
                squared_image: string
                static_icon_image: string
            }
        }[]
        skin: {
            name: string
            properties: {
                // 这边的属性敢不敢更多点？
                // 谁爱标谁标，反正我不愿意标

                // head_bg: string
                // // 背景视频
                // head_myself_mp4_bg: string

                // 皮肤压缩包md5
                package_md5: string
                // 皮肤压缩包链接
                package_url: string

                // 下略
            }
        }[]
        space_bg: {
            name: string
            properties: {
                // cnm这怎么标注类型

                // // 空间背景图（完整）
                // image1_landscape: string
                // // 空间背景图（肖像）
                // image1_portrait: string
            }
        }
        thumbup: {
            name: string
            properties: {
                // 这是个啥？？？
                image_ani: string
                // 这是个啥？？？？？
                image_ani_cut: string
                // 点赞动画预览图？
                image_preview: string
            }
        }[]

        // 装扮拥有者信息
        fan_user: {
            // UID
            mid: string
            // 名称
            nickname: string
            // 头像
            avatar: string
        }
    }
}

interface LotteryDetail {
    lottery_id: number
    name: string
    item_list: {
        item_type: 1
        card_info: LotteryCardInfo
    }[]
}

interface LotteryCardInfo {
    card_type_id: number
    card_name: string

    card_scarcity: number

    card_img: string
    video_list?: string[]

    card_img_download: string
    video_list_download?: string[]
}

export type { GarbSearchResult, LotteryProperties, LotteryDetail, LotteryCardInfo, SuitProperties, SuitDetail }