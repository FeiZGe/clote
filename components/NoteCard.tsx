import { formateDate } from "@/lib/utils"
import { EyeIcon } from "lucide-react"
import Image from "next/image";
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NoteCard = ({ post }: { post: NoteTypeCard }) => {
    const { _createAt, views, author: { _id: authorId, name }, title, category, image, description, _id} = post;

  return (
    <li className="note-card group">
        <div className="flex-between">
            <p className="note-card_date">
                {formateDate(_createAt)}
            </p>
            <div className="flex gap-1.5">
                <EyeIcon className="size-6 text-primary" />
                <span className="text-16-medium">{views}</span>
            </div>
        </div>

        <div className="flex-between mt-5 gap-5">
            <div className="flex-1">
                <Link href={`/user/${authorId}`}>
                    <p className="text-16-medium line-clamp-1">{name}</p>
                </Link>

                <Link href={`/note/${_id}`}>
                    <h3 className="text-26-semibold line-clamp-1">{title}</h3>
                </Link>
            </div>

            <Link href={`/user/${authorId}`}>
                <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2643&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="author"  />
                    <AvatarFallback>PF</AvatarFallback>
                </Avatar>
            </Link>
        </div>

        <Link href={`/note/${_id}`}>
            <p className="note-card_desc">
                {description}
            </p>

            <Image src={image} alt="placeholder" className="note-card_img" width={500} height={400} />
        </Link>

        <div className="flex-between mt-5 gap-3">
            <Link href={`/?query=${category.toLowerCase()}`}>
                <p className="text-16-medium">{category}</p>
            </Link>
            <Button className="note-card_btn" asChild>
                <Link href={`/note/${_id}`}>
                    รายละเอียด
                </Link>
            </Button>
        </div>

    </li>
  )
}

export default NoteCard
