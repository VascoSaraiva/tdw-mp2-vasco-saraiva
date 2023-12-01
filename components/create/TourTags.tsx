import { allTags } from '@/constants'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { addNewBox, addTag, removeBox } from '@/redux/slices/tagsSlice'
import { Menu } from '@headlessui/react'
import React, { useEffect } from 'react'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';


const TourTags = () => {

    const dispatch = useAppDispatch()
    const tags = useAppSelector(state => state.tags)

    function handleSelectedTag(interest: string, tagId: string) {
        dispatch(addTag({
            tagId,
            selectedInterest: interest
        }))
    }

    function handleDeleteTag(tagId: string) {
        dispatch(removeBox(tagId))
    }

    useEffect(() => {
        tags.length == 0 && dispatch(addNewBox())
    }, [tags])


    let items: string[] = []

    tags.map(tag => tag.tagName != null && items.push(tag.tagName))

    let availableTags = allTags.filter(item => !tags.some(tag => item === tag.tagName));

    
    


    return (
        <div className="flex flex-col gap-2.5">
            <p>What is this tour about?</p>

            {tags.map((tag) =>

                <Menu key={tag.tagId}>
                    <div className="relative">


                        <Menu.Button className={tag.tagName ? 'confirmedTagButton' : 'tagButton'}>
                            {tag.tagName ?
                                <>
                                    <p className='truncate'>{tag.tagName}</p>
                                    <DeleteOutlinedIcon onClick={() => handleDeleteTag(tag.tagId)} />
                                </>
                                :
                                <>
                                    Choose a tag
                                    {tags.length > 1 ?
                                        <DeleteOutlinedIcon onClick={() => handleDeleteTag(tag.tagId)} />
                                        :
                                        <AddBoxOutlinedIcon />
                                    }

                                </>
                            }


                        </Menu.Button>





                        <Menu.Items className="absolute left-0 right-0 mx-auto max-w-[336px] rounded-md top-[62px] p-[24px] border-2 bg-white shadow-md w-full flex flex-col gap-[24px] text-stone-500 max-h-64 overflow-y-scroll z-10">

                            {availableTags.map(interest => 
                                
                                        <Menu.Item key={interest}>
                                            <button
                                                className="text-left"
                                                onClick={() => handleSelectedTag(interest, tag.tagId)}>
                                                {interest}
                                            </button>
                                        </Menu.Item>
                                    
                            )}

                        </Menu.Items>



                    </div>
                </Menu>


            )}

            {tags.length < 5 &&
                <button
                    className='addMoreTagsButton'
                    onClick={() => dispatch(addNewBox())}
                >
                    Add more tags
                </button>}
        </div>
    )
}

export default TourTags



