import {
    LayoutDashboard,
    FileText,
    PenSquare,
    FolderKanban,
    BarChart3,
    Settings,
} from 'lucide-react';

export const navigation = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutDashboard
    },
    {
        title: 'Blogs',
        href: '/blogs',
        icon: FileText,
    },
    {
        title: 'Editor',
        href: '/editor',
        icon: PenSquare,
    },
    {
        title: 'Series',
        href: '/series',
        icon: FolderKanban,
    },
    {
        title: 'Analytics',
        href: '/analytics',
        icon: BarChart3,
    },
    {
        title: 'Settings',
        href: '/settings',
        icon: Settings,
    },
]