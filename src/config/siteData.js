export const getSiteData = () => {
  return {
    title: import.meta.env.VITE_APP_TITLE || 'AquaScape Shop',
    profile: {
      name: import.meta.env.VITE_PROFILE_NAME || 'AquaScape Pro',
      description: import.meta.env.VITE_PROFILE_DESC || 'Nâng tầm không gian sống của bạn',
      badgeText: import.meta.env.VITE_BADGE_TEXT || 'HƠN 5000+ KHÁCH HÀNG',
      avatarUrl: import.meta.env.VITE_AVATAR_IMAGE || 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&q=80&w=200&h=200',
    },
    heroImage: import.meta.env.VITE_HERO_IMAGE || 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be1?auto=format&fit=crop&q=80&w=1200&h=1600',
    links: [
      {
        url: import.meta.env.VITE_LINK_1_URL || '#',
        label: import.meta.env.VITE_LINK_1_LABEL || 'Website Cửa Hàng',
        icon: import.meta.env.VITE_LINK_1_ICON || 'globe',
        color: import.meta.env.VITE_LINK_1_COLOR || 'blue',
      },
      {
        url: import.meta.env.VITE_LINK_2_URL || '#',
        label: import.meta.env.VITE_LINK_2_LABEL || 'Liên hệ Zalo',
        icon: import.meta.env.VITE_LINK_2_ICON || 'message-circle',
        color: import.meta.env.VITE_LINK_2_COLOR || 'green',
      },
      {
        url: import.meta.env.VITE_LINK_3_URL || '#',
        label: import.meta.env.VITE_LINK_3_LABEL || 'Theo dõi Facebook',
        icon: import.meta.env.VITE_LINK_3_ICON || 'facebook',
        color: import.meta.env.VITE_LINK_3_COLOR || 'blue',
      },
      {
        url: import.meta.env.VITE_LINK_4_URL || '#',
        label: import.meta.env.VITE_LINK_4_LABEL || 'TikTok Studio',
        icon: import.meta.env.VITE_LINK_4_ICON || 'music',
        color: import.meta.env.VITE_LINK_4_COLOR || 'black',
      },
    ].filter(link => link.url && link.label),
  };
};
