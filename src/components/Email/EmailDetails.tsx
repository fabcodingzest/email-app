import React from 'react'
import ProfileImage from '../common/ProfileImage'
import { emailList } from './EmailList'
import Text from '../common/Text'
import { formatDate } from '../../utils/formatDate'
import sanitizeHtml from 'sanitize-html'

interface EmailDetails {
  id: string
  body: string
}

const emailDetails: EmailDetails = {
  id: '3',
  body: '<div><p>Integer lacinia, ante ut mattis tincidunt, quam augue laoreet elit, vitae consequat arcu lacus ac magna. Nunc euismod in magna eget molestie. Phasellus lacinia in sapien id ultricies. Nulla ac rhoncus nulla. Donec pellentesque tortor iaculis dolor mollis laoreet. Nunc magna orci, suscipit ut nunc fringilla, imperdiet tempus libero. Mauris sed nunc mattis urna tempor tempor vitae eget lorem. Sed pellentesque, tellus vel sagittis dignissim, ipsum erat tempor turpis, id tristique augue mi tincidunt nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec ipsum quis nibh scelerisque pretium vitae ac turpis. Cras porta vestibulum lorem sit amet lacinia. Phasellus accumsan est sagittis, scelerisque ligula at, porta arcu. Vestibulum metus justo, tempus eget feugiat id, iaculis tincidunt elit.</p><p>Aliquam diam mauris, porttitor non commodo at, viverra id dui. Proin finibus a nulla id posuere. Donec ultricies cursus metus, at egestas tortor dignissim eu. Aliquam a massa eu erat gravida ultrices. Vivamus venenatis imperdiet purus, at egestas enim elementum quis. Nunc ultricies sapien sapien, gravida porttitor diam porta non. Fusce pretium sodales erat. Donec interdum ipsum odio, sit amet luctus est pharetra non. Mauris euismod neque eu malesuada scelerisque. In ultricies lectus eu libero accumsan, ultricies commodo nibh consequat. Pellentesque condimentum, neque id sollicitudin egestas, risus est lobortis diam, in faucibus sapien tortor eu felis. Cras a turpis aliquam, tristique eros at, ullamcorper tellus. Maecenas at tortor magna.</p><p>Phasellus eu purus hendrerit, blandit ante ut, rhoncus neque. Nullam mattis non velit nec bibendum. Morbi commodo enim nec semper ultrices. Pellentesque sit amet vestibulum leo. Pellentesque blandit diam in placerat viverra. Phasellus posuere velit mauris, et auctor lectus scelerisque eu. Cras turpis lorem, gravida quis congue id, tristique non lorem. Proin sit amet eros sit amet ligula vehicula faucibus nec quis ipsum. Nullam semper urna sit amet justo iaculis porta. Nullam commodo libero pulvinar, faucibus dui in, viverra ante. Duis vel leo neque.</p><p>Quisque rhoncus dignissim tincidunt. Duis ornare enim pretium imperdiet iaculis. Fusce finibus turpis non lacus convallis vehicula. Quisque et porta orci. Quisque sed erat at diam feugiat viverra. Vestibulum dignissim velit interdum nibh consectetur venenatis. Sed sodales blandit facilisis. Duis elementum, justo at vehicula tempor, libero quam malesuada magna, et fermentum arcu diam vel elit. Pellentesque sollicitudin egestas varius. Vestibulum efficitur tortor eu dolor mollis fringilla. Aliquam tincidunt ornare leo. Pellentesque malesuada urna magna, sed imperdiet leo vehicula eu. In a odio sit amet magna lobortis aliquet a ac est.</p></div>',
}

const EmailDetails: React.FunctionComponent = () => {
  const [emailInfo] = emailList.filter((email) => email.id === emailDetails.id)
  const formattedDate = formatDate(emailInfo?.date)

  return (
    <div className='border-neutral flex w-full items-start gap-4 rounded-md border bg-white p-4'>
      <ProfileImage initial={'F'} />
      <div className='flex flex-col gap-3'>
        <div className='flex items-start justify-between'>
          <Text fontSize='text-xl' text={emailInfo?.subject} style='font-bold' />
          <button className='bg-primary rounded-full px-2 py-1 text-xs text-white'>
            Mark as favorite
          </button>
        </div>
        <Text fontSize='text-xs' text={formattedDate} />
        <div
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(emailDetails.body) }}
          className='text-sm'
        />
      </div>
    </div>
  )
}

export default EmailDetails
