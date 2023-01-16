import React from 'react'
import EmailCard from './EmailCard'

export interface Email {
  id: string
  from: {
    email: string
    name: string
  }
  date: number
  subject: string
  short_description: string
}

interface EmailListProps {
  details: {
    detailActive: string
    setDetailActive: React.Dispatch<React.SetStateAction<string>>
  }
  width: string
}

export const emailList: Email[] = [
  {
    id: '1',
    from: {
      email: 'bounced@flipkart.com',
      name: 'bounced',
    },
    date: 1582729505000,
    subject: 'Lorem Ipsum',
    short_description:
      'Vestibulum sit amet ipsum aliquet, lacinia nulla malesuada, ullamcorper massa',
  },
  {
    id: '2',
    from: {
      email: 'noreply@flipkart.com',
      name: 'noreply',
    },
    date: 1582728505000,
    subject: 'Lorem Ipsum',
    short_description: 'Aenean ut odio eu risus sollicitudin vehicula volutpat vel ante',
  },
  {
    id: '3',
    from: {
      email: 'yourfriends@flipkart.com',
      name: 'yourfriends',
    },
    date: 1582727505000,
    subject: 'Lorem Ipsum',
    short_description: 'Nam eget erat accumsan, auctor sapien ut, tempor diam',
  },
  {
    id: '4',
    from: {
      email: 'hello@flipkart.com',
      name: 'hello',
    },
    date: 1582726505000,
    subject: 'Lorem Ipsum',
    short_description: 'Morbi eget nunc interdum felis varius tincidunt',
  },
  {
    id: '5',
    from: {
      email: 'howdy@flipkart.com',
      name: 'howdy',
    },
    date: 1582725505000,
    subject: 'Lorem Ipsum',
    short_description: 'Integer consequat dolor sed justo consequat, id elementum eros facilisis',
  },
  {
    id: '6',
    from: {
      email: 'media@flipkart.com',
      name: 'media',
    },
    date: 1582724505000,
    subject: 'Lorem Ipsum',
    short_description: 'Pellentesque sed erat pulvinar, ornare elit at, elementum tortor',
  },
]

const EmailList = ({ details, width }: EmailListProps) => {
  return (
    <div className={`flex flex-col gap-4 ${width}`}>
      {emailList.map((email: Email) => (
        <EmailCard key={email.id} data={email} details={details} />
      ))}
    </div>
  )
}

export default EmailList
