import Link from 'next/link';

interface SidebarButtonProps {
  name: string;
}

export default function SidebarButton({ name }: SidebarButtonProps) {
  const href = name === 'generate' ? '/' : `/${name}`;

  return (
    <li>
      <Link href={href}>{name}</Link>
    </li>
  );
}
