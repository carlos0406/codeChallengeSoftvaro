import { render, screen } from '@testing-library/react'
import Articles from '../../../components/container/Articles'

describe('payment  component', () => {
	const articles = [
		{
			title: "BBC agrees 'substantial damages' to ex-royal nanny over Diana interview - Reuters.com",
			description: "The BBC said on Thursday it had agreed to pay \"substantial damages\"",
			url: "https://www.reuters.com/world/uk/bbc-agrees-substantial-damages-ex-royal-nanny-over-diana-interview-2022-07-21/",
			urlToImage: "https://www.reuters.com/resizer/PO8ebVzY37Xm4hGVLFphvjbJrJM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IQMLJPTKRNKPRCR7GD22L6AR3M.jpg"
		}
	]
	it('renders correctly', () => {
		render(<Articles articles={articles} />)
		expect(screen.getByText("News")).toBeInTheDocument()
		expect(screen.getByText("BBC agrees 'substantial damages' to ex-royal nanny over Diana interview - Reuters.com")).toBeInTheDocument()
		expect(screen.getByText("The BBC said on Thursday it had agreed to pay \"substantial damages\"")).toBeInTheDocument()


	})
})
