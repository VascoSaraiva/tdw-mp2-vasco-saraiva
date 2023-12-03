import PostCard from "@/components/posts/PostCard"
import { render, screen } from '@testing-library/react'


const mockData = [
    {
        id: 1,
        author: 'Vasco Saraiva',
        authorphoto: 'https://lh3.googleusercontent.com/a/ACg8ocIAktq6I1m11uXFOA28Qa8noVHVNB5SqJ97vXJPfTKVhg0=s96-c',
        title: 'Best places in Aveiro',
        description: 'Truly the best places.',
        tags: [
            '{ "tagId": "1234", "tagName": "Activities for Couples" }',
        ],
        places: [
            {
                place_id: '1',
                name: 'Praia',
                rating: 5,
                url: 'url',
                user_ratings_total: 5,
                photo: 'url',
                editorial_summary: 'text',
            }
        ],
        placePhotoURL: '/default_place_image.png'
    },
    {
        id: 2,
        author: 'Sofia Saraiva',
        authorphoto: 'https://lh3.googleusercontent.com/a/ACg8ocIAktq6I1m11uXFOA28Qa8noVHVNB5SqJ97vXJPfTKVhg0=s96-c',
        title: 'Best places in Lisboa',
        description: 'Truly the best places.',
        tags: [
            '{ "tagId": "1234", "tagName": "Outdoor" }',
        ],
        places: [
            {
                place_id: '1',
                name: 'Praia',
                rating: 5,
                url: 'url',
                user_ratings_total: 5,
                photo: 'url',
                editorial_summary: 'text',
            }
        ],
        placePhotoURL: '/default_place_image.png'
    },
    {
        id: 3,
        author: 'Carlos Saraiva',
        authorphoto: 'https://lh3.googleusercontent.com/a/ACg8ocIAktq6I1m11uXFOA28Qa8noVHVNB5SqJ97vXJPfTKVhg0=s96-c',
        title: 'Best places in Aveiro',
        description: 'Truly the best places.',
        tags: [
            '{ "tagId": "1234", "tagName": "Bike" }',
        ],
        places: [
            {
                place_id: '1',
                name: 'Praia',
                rating: 5,
                url: 'url',
                user_ratings_total: 5,
                photo: 'url',
                editorial_summary: 'text',
            }
        ],
        placePhotoURL: '/default_place_image.png'
    }


]

describe('PostCard', () => {

    it('should display "Best places in Aveiro"', () => {
        render(<PostCard data={mockData[0]} />)

        const postCard = screen.getByRole('link', {
            name: mockData[0].title
        })

        expect(postCard).toBeInTheDocument()
    })

    it('should display "Truly the best places."', () => {
        render(<PostCard data={mockData[1]} />)

        const postCard = screen.getByText(mockData[1].description)

        expect(postCard).toBeInTheDocument()
    })

    it('should display total number of places', () => {
        render(<PostCard data={mockData[2]} />)

        const postCard = screen.getByText(mockData[2].places.length + ' Place')

        expect(postCard).toBeInTheDocument()
    })


})

