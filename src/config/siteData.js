export const getSiteData = () => {
  return {
    title: import.meta.env.VITE_APP_TITLE || 'Long Vu Fish Store',
    profile: {
      name: import.meta.env.VITE_PROFILE_NAME || 'Long Vu Fish Store',
      description: import.meta.env.VITE_PROFILE_DESC || 'Chuyên cá cảnh - hồ cá - cá săn mồi',
      badgeText: import.meta.env.VITE_BADGE_TEXT || 'HƠN 5000+ KHÁCH HÀNG HÀI LÒNG',
      avatarUrl: import.meta.env.VITE_AVATAR_IMAGE || 'https://res.cloudinary.com/ddoxrhcwj/image/upload/v1777292818/965cf6ee-9253-4fd0-a5be-714a5846e847_hns0a3.jpg',
    },
    heroImage: import.meta.env.VITE_HERO_IMAGE || 'https://res.cloudinary.com/ddoxrhcwj/image/upload/v1777292818/965cf6ee-9253-4fd0-a5be-714a5846e847_hns0a3.jpg',
    links: [
      {
        url: import.meta.env.VITE_LINK_1_URL || '#',
        label: import.meta.env.VITE_LINK_1_LABEL || 'Facebook - Long Vu Fish Store (Hồ Cá)',
        icon: import.meta.env.VITE_LINK_1_ICON || 'facebook',
        color: import.meta.env.VITE_LINK_1_COLOR || 'blue',
      },
      {
        url: import.meta.env.VITE_LINK_2_URL || '#',
        label: import.meta.env.VITE_LINK_2_LABEL || 'Facebook - Cá Săn Mồi',
        icon: import.meta.env.VITE_LINK_2_ICON || 'facebook',
        color: import.meta.env.VITE_LINK_2_COLOR || 'blue',
      },
      {
        url: import.meta.env.VITE_LINK_3_URL || '#',
        label: import.meta.env.VITE_LINK_3_LABEL || 'TikTok - Long Vu Aquarium (Hồ Cá)',
        icon: import.meta.env.VITE_LINK_3_ICON || 'music',
        color: import.meta.env.VITE_LINK_3_COLOR || 'black',
      },
      {
        url: import.meta.env.VITE_LINK_4_URL || '#',
        label: import.meta.env.VITE_LINK_4_LABEL || 'TikTok - Long Vu Fish Store (Cá Săn Mồi)',
        icon: import.meta.env.VITE_LINK_4_ICON || 'music',
        color: import.meta.env.VITE_LINK_4_COLOR || 'black',
      },
      {
        url: import.meta.env.VITE_LINK_7_URL || 'https://zalo.me/0966888370',
        label: import.meta.env.VITE_LINK_7_LABEL || 'Zalo Hotline: 0966 888 370',
        icon: import.meta.env.VITE_LINK_7_ICON || 'message-circle',
        color: import.meta.env.VITE_LINK_7_COLOR || 'green',
      },
      {
        url: import.meta.env.VITE_LINK_5_URL || 'tel:0966888370',
        label: import.meta.env.VITE_LINK_5_LABEL || 'Hotline Mini Tank: 0966 888 370',
        icon: import.meta.env.VITE_LINK_5_ICON || 'phone',
        color: import.meta.env.VITE_LINK_5_COLOR || 'green',
      },
      {
        url: import.meta.env.VITE_LINK_6_URL || 'tel:0386868381',
        label: import.meta.env.VITE_LINK_6_LABEL || 'Hotline Hồ Custom: 038 6868 381',
        icon: import.meta.env.VITE_LINK_6_ICON || 'phone',
        color: import.meta.env.VITE_LINK_6_COLOR || 'green',
      },
    ].filter(link => link.url && link.label),
  };
};
