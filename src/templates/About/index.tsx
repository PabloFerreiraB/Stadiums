import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import * as S from './styles'

import LinkWrapper from 'components/LinkWrapper'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>Stadiums</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta saepe
        modi eaque minus reprehenderit labore nostrum autem odio aperiam et
        consectetur ad esse earum, quia ratione repellendus! Facilis, doloremque
        obcaecati?
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
