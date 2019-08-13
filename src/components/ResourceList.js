import React from 'react';
import useResouces from './useResources';

const ResourceList = ({ resource }) => {
	const resources = useResouces(resource);
	return (
		<ul>
			{resources.map(record => (
				<li key={record.id}>{record.title}</li>
			))}
		</ul>
	);
};

export default ResourceList;
