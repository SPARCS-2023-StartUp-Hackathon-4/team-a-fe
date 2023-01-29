import { Pencil2Icon, TextIcon } from '@radix-ui/react-icons';
import { Editor } from '@tinymce/tinymce-react';
import { Button } from 'components/Button';
import { WorkspaceLayout } from 'components/Layouts';
import { styled } from 'styles/stitches';
import { html } from './html';
import { useRouter } from 'next/router';

const WorkspaceHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  minHeight: '48px',
  padding: '0 16px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  color: '$grey900',
  fontSize: '14px',
  fontWeight: 500,
  gap: '8px',
});

const EditorWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
  border: 0,
});

const EditorProperties = styled('div', {
  position: 'relative',
  width: '100%',
  maxWidth: '312px',
  height: '100%',
  borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
  backgroundColor: 'rgb(250, 250, 250)',
});

const PropertiesTitle = styled('h3', {
  fontSize: 12,
  fontWeight: 'bold',
  marginBottom: '8px',
  padding: '0 8px',
  paddingTop: '16px',
  color: 'rgba(0, 0, 0, 0.5)',
});

const ConstantsListItem = styled('li', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'max-content',
  padding: '8px',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '4px',
  color: '$grey900',
  marginTop: '4px',
  fontSize: '14px',
  fontWeight: 500,
  gap: '8px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$grey100',
  },
});

const ItemList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  padding: '0px 8px',
  gap: '8px',
});

const ComponentsItem = styled('li', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100px',
  padding: '16px',
  backgroundColor: '$grey100',
  borderRadius: '8px',
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
  },
});

const ComponentsItemHeaderTitle = styled('h3', {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '$grey700',
  marginBottom: '8px',
});

const ComponentsItemDescription = styled('p', {
  fontSize: '14px',
  fontWeight: 400,
  color: '$grey500',
  lineHeight: '24px',
});

const DiagramItem = styled('li', {
  display: 'flex',
  flexDirection: 'column',
  width: '200px',
  height: '200px',
  padding: '16px',
  backgroundColor: '$grey100',
  borderRadius: '8px',
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
  },
});

const LinkTag = styled('span', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'max-content',
  height: '32px',
  padding: '0 8px',
  borderRadius: '500px',
  fontSize: '14px',
  backgroundColor: '$blue700',
  color: '#fff',
  marginRight: '16px',
  fontWeight: '500',
  transform: 'translate(0, 0)',
});

export const BusinessPlanWrite = () => {
  const router = useRouter();
  return (
    <WorkspaceLayout>
      <WorkspaceHeader>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Pencil2Icon />
          2023년 예비창업패키지 에이컴퍼니 사업계획서 초안
        </div>
        <Button
          btnType="default"
          onClick={() => {
            alert('저장되었습니다.');
            router.replace('/workspace/business/plan/');
          }}
        >
          저장하기
        </Button>
      </WorkspaceHeader>
      <EditorWrapper>
        <Editor
          apiKey="l6crcgak29utuullxnmpu3wjnux8ukdsu32qt2ar3t2va3t3"
          initialValue={html}
          onLoadContent={(content, editor) => {
            console.log('Content was loaded:', content);
          }}
          onEditorChange={(content, editor) => {
            console.log('Content was updated:', content);
          }}
          init={{
            width: '100%',
            plugins: [
              'powerpaste paste preview casechange searchreplace autolink directionality advcode visualblocks visualchars image link media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker editimage help formatpainter permanentpen charmap tinycomments linkchecker emoticons advtable export print autosave save code codesample',
            ],
            toolbar:
              'undo redo print spellcheckdialog code formatpainter | blocks fontfamily fontsize | bold italic underline forecolor backcolor | link image addcomment showcomments  | alignleft aligncenter alignright alignjustify lineheight | checklist bullist numlist indent outdent | removeformat',
            content_style:
              'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            extended_valid_elements: '*[*]',
            // setContent and getContent
            // https://www.tiny.cloud/docs/configure/content-filtering/#setcontent_and_getcontent
            setup: (editor) => {
              editor.on('', () => {});
              editor.on('drop', (event) => {
                event.preventDefault();
                const data = event.dataTransfer?.getData('text/plain');
                if (data) {
                  editor.insertContent(data);
                }
              });
            },
            paste_remove_styles_if_webkit: false,
          }}
        />
        <EditorProperties>
          <PropertiesTitle>컴포넌트/상수</PropertiesTitle>
          <ItemList>
            <ConstantsListItem
              draggable
              onDragStart={(event) => {
                event.dataTransfer.setData(
                  'text/plain',
                  `<span style="background-color: #c9e2ff; color: black; font-size: 10px;"; contenteditable="false">
                  플릿컴퍼니</span>
                `,
                );
              }}
            >
              <TextIcon />
              플릿컴퍼니
            </ConstantsListItem>
            <ComponentsItem
              draggable
              onDragStart={(event) => {
                event.dataTransfer.setData(
                  'text/plain',
                  `<p style="background-color: blue;color: white;font-size: 14px;"; contenteditable="false" onClick="">
                  창업 동기
                </p>
                <p>IT 업계를 창업한 이유는 다양할 수 있지만, 일반적으로는 다음과 같은
                이유가 있을 수 있다: 최신 기술을 활용하여 새로운 서비스를 제공하기
                위해 시장 점유율을 높이기 위해 자신의 아이디어를 실현하기 위해
                자신의 일에 대한 자유를 추구하기 위해</p>
                `,
                );
              }}
            >
              <ComponentsItemHeaderTitle>창업 동기</ComponentsItemHeaderTitle>
              <ComponentsItemDescription>
                IT 업계를 창업한 이유는 다양할 수 있지만, 일반적으로는 다음과
                같은 이유가 있을 수 있다: 최신 기술을 활용하여 새로운 서비스를
                제공하기 위해 시장 점유율을 높이기 위해 자신의 아이디어를
                실현하기 위해 자신의 일에 대한 자유를 추구하기 위해
              </ComponentsItemDescription>
            </ComponentsItem>
            <DiagramItem
              draggable
              onDragStart={(event) => {
                event.dataTransfer.setData(
                  'text/plain',
                  `<img
                  src="https://user-images.githubusercontent.com/59228569/215298964-746e1955-b081-4ee2-b3f3-0f4975937bd9.png"
                  width="165"
                  height="170"
                  alt="diagram"
                />
                `,
                );
              }}
            >
              <img
                src="https://user-images.githubusercontent.com/59228569/215298964-746e1955-b081-4ee2-b3f3-0f4975937bd9.png"
                width="165"
                height="170"
                alt="diagram"
              />
            </DiagramItem>
            <LinkTag
              draggable
              onDragStart={(event) => {
                event.dataTransfer.setData(
                  'text/plain',
                  `<span style="background-color: #ffe0b2; color: black; font-size: 10px;"; contenteditable="false">
                  https://hackathon.sparcs.org/</span>
                    `,
                );
              }}
            >
              행사 링크
            </LinkTag>
          </ItemList>
        </EditorProperties>
      </EditorWrapper>
    </WorkspaceLayout>
  );
};
